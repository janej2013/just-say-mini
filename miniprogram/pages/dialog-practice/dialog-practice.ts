// pages/dialog-practice/dialog-practice.ts
// 引入腾讯云语音识别SDK
const QCloudASR = require('../../lib/asr.min.js');
// 引入环境变量配置
const envConfig = require('../../config/env.js');
// 引入 TTS 管理器
import ttsManager from '../../utils/tts-manager';

// ==================== Mock 模式配置 ====================
// 设置为 true 启用Mock模式，false 使用真实语音识别
const MOCK_MODE_ENABLED = true;
// Mock数据将在运行时根据当前任务动态生成
const mockData = {
  mockEnabled: true,
  mockAnswers: {} // 将在initWithLevelData时填充
};
// =======================================================

Page({
  data: {
    // 页面数据
    audioPlaying: false,
    dialogList: [],
    keywordsHint: [],
    taskTitle: '',
    npcRole: 'A',
    currentTaskIndex: 0,
    totalTasks: 0,
    progress: 0,
    currentPage: 0,
    totalPages: 0,
    paginationList: [], // 用于分页指示器
    isRecording: false,    // 是否正在录音
    npcDialogContent: '', // NPC对话内容
    currentTaskData: null, // 当前任务完整数据
    userRecognizedText: '', // 用户识别的文本
    feedbackResult: null, // 反馈结果 {type: 'perfect'|'tips', score: number, details: object}
    allTasks: [], // 所有任务列表
    currentTaskIdx: 0, // 当前任务索引
    dialogIdCounter: 1, // 对话 ID计数器
    currentPlayingDialogId: null, // 当前播放语音的对话ID
    allTasksCompleted: false, // 是否完成所有任务
    isTTSPlaying: false, // TTS 是否正在播放
    levelNpc: null, // 关卡的NPC信息（从level层级获取）
    tasksCompletionStatus: [false, false, false], // 三个任务的完成状态
    showFeedbackModal: false, // 是否显示反馈弹窗
    modalWithOptions: false, // 弹窗是否显示操作按钮
    language: 'zh', // 当前语言，默认中文
    isTaskExpanded: false, // 任务面板是否展开
    showKeywords: false, // 是否显示关键词
    showTipsModal: false, // 是否显示提示弹窗
    showWinModal: false, // 是否显示胜利弹窗
    levelHints: ["I'd like ...", "Can you help ...?", "Thank you!"] // 关卡提示句型
  },
  
  // 音频上下文
  audioContext: null,
  innerAudioContext: null,
  recognizer: null,  // 语音识别实例
  tempCredentials: null,  // 临时安全凭证
  currentRecordingId: null,  // 当前录音会话 ID

  toggleTaskBoard() {
    this.setData({
      isTaskExpanded: !this.data.isTaskExpanded
    });
  },

  toggleKeywords() {
    this.setData({
      showKeywords: !this.data.showKeywords
    });
  },

  onShowTips() {
    this.setData({
      showTipsModal: true
    });
  },

  onCloseTips() {
    this.setData({
      showTipsModal: false
    });
  },

  onReturnToMap() {
    wx.navigateBack();
  },

  /**
   * 页面加载
   */
  onLoad(options) {
    console.log('对话练习页面加载', options);
    
    // 获取全局语言设置
    const app = getApp<IAppOption>();
    this.setData({
      language: app.globalData.language || 'zh'
    });
    
    // Mock模式提示
    if (MOCK_MODE_ENABLED) {
      console.log('🎭 Mock模式已启用');
    }
    
    // 初始化语音识别
    this.initSpeechRecognition();
    
    // 加载关卡数据
    if (options.levelData) {
      try {
        const levelData = JSON.parse(decodeURIComponent(options.levelData));
        console.log('接收到关卡数据:', levelData);
        this.initWithLevelData(levelData);
      } catch (e) {
        console.error('解析关卡数据失败:', e);
        this.loadDefaultData();
      }
    } else {
      // 如果没有传入参数，使用默认数据
      console.warn('⚠️ 未接收到关卡数据，使用默认数据');
      this.loadDefaultData();
    }
  },

  /**
   * 使用关卡数据初始化（每个关卡固定3个任务）
   */
  initWithLevelData(levelData) {
    const tasks = levelData.tasks || [];
    const currentTaskIdx = levelData.currentTaskIndex || 0;
    
    if (tasks.length !== 3) {
      console.error(`关卡任务数量异常: ${tasks.length}, 期望为 3`);
      this.loadDefaultData();
      return;
    }
    
    // 动态生成 mockAnswers
    if (MOCK_MODE_ENABLED) {
      mockData.mockAnswers = {};
      tasks.forEach((task, index) => {
        const taskId = task.taskId;
        // 仅使用新结构
        let mockAnswer = task.user || task.tips?.simple || '';
        
        console.log(`🎯 任务 ${index + 1} (${taskId}):`, {
          user: task.user,
          tipsSimple: task.tips?.simple,
          mockAnswer
        });
        
        // 对第三个任务（index === 2）截断答案，只取前半部分
        if (index === 2 && mockAnswer) {
          const words = mockAnswer.split(' ');
          const halfLength = Math.ceil(words.length / 2);
          mockAnswer = words.slice(0, halfLength).join(' ');
          console.log(`🎭 第三个任务答案已截断: ${mockAnswer}`);
        }
        
        mockData.mockAnswers[taskId] = mockAnswer;
      });
      
      console.log('🎭 动态生成的 mockAnswers:', mockData.mockAnswers);
    }
    
    // 保存所有任务、当前索引和level的NPC信息
    this.setData({
      allTasks: tasks,
      currentTaskIdx: currentTaskIdx,
      taskTitle: levelData.levelTitle || 'Practice',
      levelNpc: levelData.npc || { animal: 'Panda', role: 'Staff' },
      tasksCompletionStatus: [false, false, false], // 初始化3个任务的完成状态
      allTasksCompleted: false, // 重置完成状态
      levelHints: this.getLevelHints(levelData.levelId || '')
    });
    
    console.log('✅ Level数据已设置:', {
      allTasksLength: this.data.allTasks.length,
      firstTask: this.data.allTasks[0],
      currentTaskIdx: this.data.currentTaskIdx,
      levelNpc: this.data.levelNpc
    });
    
    // 初始化第一个任务
    const firstTask = tasks[currentTaskIdx];
    console.log('🎬 开始初始化第一个任务:', firstTask);
    this.initDialogData(firstTask, false);
    
    // 设置初始进度（3个任务：33%, 67%, 100%）
    const progress = Math.round(((currentTaskIdx + 1) / 3) * 100);
    this.setData({
      progress: progress
    });
  },

  getLevelHints(levelId) {
    if (levelId && levelId.includes('airport')) return ["Where is the ...?", "How do I get to ...?", "Is there a ...?"];
    if (levelId && levelId.includes('taxi')) return ["I'd like to go to ...", "Can you turn on ...?", "How much is ...?"];
    if (levelId && levelId.includes('hotel')) return ["I'd like to ...", "What is the ...?", "When is ...?"];
    return ["I'd like ...", "Can you help ...?", "Thank you!"];
  },

  /**
   * 初始化对话数据
   * @param task 任务数据
   * @param isAppend 是否追加模式（默认false，即替换模式）
   */
  initDialogData(task, isAppend = false) {
    console.log('🔄 初始化对话数据:', task, '追加模式:', isAppend);
    
    // 提取数据 - 仅使用新数据结构
    const botQuestion = task.bot || 'Hello!';
    const keywordsHint = task.keywords || [];
    // 从level层级获取NPC信息
    const levelNpc = this.data.levelNpc || task.npc || { animal: 'Panda', role: 'Staff' };
    const npcAnimal = levelNpc.animal || 'Panda';
    
    console.log('📝 提取的数据:', {
      botQuestion,
      keywordsHint,
      npcAnimal,
      taskDesc: task.desc
    });
    
    // 保存完整任务数据供后续评分使用
    this.setData({
      currentTaskData: task
    });
    
    if (isAppend) {
      // 追加模式：在现有对话列表中追加新的bot问题
      const currentDialogList = [...this.data.dialogList];
      const newDialogId = this.data.dialogIdCounter + 1;
      
      currentDialogList.push({
        id: newDialogId,
        type: 'npc',
        content: botQuestion,
        showText: false // 默认不显示文本
      });
      
      this.setData({
        dialogList: currentDialogList,
        keywordsHint: keywordsHint,
        npcRole: npcAnimal.charAt(0),
        npcDialogContent: botQuestion,
        dialogIdCounter: newDialogId,
        currentPlayingDialogId: newDialogId
      });
      
      // 自动播放新的NPC对话（使用TTS）
      if (!MOCK_MODE_ENABLED) {
        setTimeout(() => {
          this.playNpcAudioByDialogId(newDialogId);
        }, 100);
      }
    } else {
      // 替换模式：初始化时使用
      // 创建对话列表 - 只包含当前任务的对话
      const dialogList = [
        {
          id: 1,
          type: 'npc',
          content: botQuestion,
          showText: false // 默认不显示文本
        }
      ];
      
      // 设置页面数据
      const total = dialogList.length;
      const paginationList = Array.from({ length: total }, (_, i) => i);
      
      this.setData({
        dialogList: dialogList,
        keywordsHint: keywordsHint,
        taskTitle: `${task.taskId || 'Practice Task'}`,
        npcRole: npcAnimal.charAt(0), // 使用动物名字的首字母
        totalTasks: total,
        currentPage: 0, // 当前页从0开始
        totalPages: total,
        paginationList: paginationList,
        progress: 60, // 设置初始进度
        npcDialogContent: botQuestion, // 设置NPC对话内容
        dialogIdCounter: 1,
        currentPlayingDialogId: 1
      });
      
      console.log('✅ 数据已设置到页面:', {
        dialogListLength: dialogList.length,
        firstDialog: dialogList[0],
        keywordsHintLength: keywordsHint.length,
        currentTaskData: this.data.currentTaskData
      });
      
      // NPC对话默认语音播放（使用TTS）
      if (!MOCK_MODE_ENABLED) {
        setTimeout(() => {
          this.playNpcAudioByDialogId(1);
        }, 100);
      }
    }
  },

  /**
   * 加载默认数据
   */
  loadDefaultData() {
    console.log('⚠️ 加载默认数据');
    const defaultData = {
      taskId: "default_task",
      desc: {
        en: "Ask where the baggage claim is.",
        zh: "询问行李提取处在哪里。"
      },
      bot: "Hello! Do you need help finding the baggage claim?",
      user: "Yes, where is the baggage claim?",
      tips: {
        simple: "Where is baggage claim?",
        natural: "Yes, where is the baggage claim?",
        native: "Where can I pick up my luggage?"
      },
      pattern: "Where is ...?",
      keywords: ["baggage", "claim", "luggage", "where", "find"],
      npc: {
        animal: "Panda",
        role: "Airport Information Desk Staff"
      }
    };
    
    console.log('📦 默认数据:', defaultData);
    this.initDialogData(defaultData);
  },

  /**
   * 点击关闭按钮
   */
  onClose() {
    // 返回上一页
    wx.navigateBack({
      delta: 1
    });
  },

  /**
   * 切换NPC文本显示/隐藏
   */
  toggleNpcText(e) {
    const dialogId = e.currentTarget.dataset.id;
    const updatedDialogList = this.data.dialogList.map(dialog => {
      if (dialog.id === dialogId && dialog.type === 'npc') {
        return {
          ...dialog,
          showText: !dialog.showText
        };
      }
      return dialog;
    });
    
    this.setData({
      dialogList: updatedDialogList
    });
  },

  /**
   * 播放NPC音频（使用 TTS）
   */
  async onPlayNpcAudio(e) {
    const dialogId = e.currentTarget.dataset.id;
    this.playNpcAudioByDialogId(dialogId);
  },

  /**
   * 根据dialogId播放NPC音频
   */
  async playNpcAudioByDialogId(dialogId) {
    // Mock 模式下不播放语音
    if (MOCK_MODE_ENABLED) {
      console.log('🎭 Mock模式：跳过NPC语音播放');
      return;
    }
    
    const dialog = this.data.dialogList.find(d => d.id === dialogId);
    
    if (!dialog || dialog.type !== 'npc') {
      return;
    }
    
    // 如果正在播放该音频，则停止
    if (this.data.isTTSPlaying && this.data.currentPlayingDialogId === dialogId) {
      ttsManager.stop();
      this.setData({
        isTTSPlaying: false,
        currentPlayingDialogId: null,
        audioPlaying: false
      });
      return;
    }
    
    try {
      // 停止之前的播放
      ttsManager.stop();
      
      this.setData({
        isTTSPlaying: true,
        currentPlayingDialogId: dialogId,
        audioPlaying: true
      });
      
      // 根据 NPC 动物选择音色
      const levelNpc = this.data.levelNpc || { animal: 'Panda', role: 'Staff' };
      const npcAnimal = levelNpc.animal || 'Panda';
      const voiceType = ttsManager.getVoiceTypeByNPC(npcAnimal);
      
      console.log(`🎙️ 播放 NPC (${npcAnimal}) 语音:`, dialog.content.substring(0, 50) + '...');
      
      // 调用 TTS 播放
      await ttsManager.speak({
        text: dialog.content,
        voiceType,
        speed: 3,
        volume: 0,
        primaryLanguage: 2, // 英文
        emotionCategory: 'happy'
      }, {
        onStart: () => {
          console.log('🔊 TTS 开始播放');
        },
        onEnd: () => {
          console.log('⏹️ TTS 播放结束');
          this.setData({
            isTTSPlaying: false,
            currentPlayingDialogId: null,
            audioPlaying: false
          });
        },
        onError: (err) => {
          console.error('❌ TTS 播放失败:', err);
          wx.showToast({
            title: '语音播放失败',
            icon: 'none',
            duration: 2000
          });
          this.setData({
            isTTSPlaying: false,
            currentPlayingDialogId: null,
            audioPlaying: false
          });
        }
      });
      
    } catch (error) {
      console.error('❌ TTS 播放异常:', error);
    }
  },

  /**
   * 点击播放音频（废弃，现在每个NPC都有自己的播放按钮）
   */
  onPlayAudio() {
    console.log('播放音频');
    
    // 获取当前NPC的对话内容
    const npcDialog = this.data.dialogList.find(dialog => dialog.type === 'npc');
    
    if (npcDialog) {
      if (!this.data.audioPlaying) {
        // 尝试使用在线TTS服务生成音频URL并播放
        this.playTextAsAudio(npcDialog.content);
      } else {
        // 暂停播放
        this.setData({
          audioPlaying: false
        });
        
        if (this.innerAudioContext) {
          this.innerAudioContext.pause(); // 使用pause而不是stop
        }
        
        console.log('暂停播放音频');
      }
    }
  },

  /**
   * 播放文本为音频（需后端TTS支持）
   */
  playTextAsAudio(text) {
    // 创建音频上下文
    if (!this.innerAudioContext) {
      this.innerAudioContext = wx.createInnerAudioContext();
      this.innerAudioContext.useWebAudioImplement = false;
    }

    // 以下是实现TTS的几种方案：
    // 1. 使用后端TTS API服务
    // 2. 使用预生成的音频文件
    // 3. 使用微信云开发的语音合成服务
    
    // 在实际部署时，通过后端API将文本转换为音频
    this.getTTSAudioUrl(text).then(audioUrl => {
      if (audioUrl) {
        this.innerAudioContext.src = audioUrl;
        
        this.innerAudioContext.play();
        
        this.innerAudioContext.onPlay(() => {
          console.log('音频开始播放:', text);
          this.setData({
            audioPlaying: true
          });
        });
        
        this.innerAudioContext.onEnded(() => {
          console.log('音频播放结束');
          this.setData({
            audioPlaying: false
          });
        });
        
        this.innerAudioContext.onError((res) => {
          console.error('音频播放错误:', res);
          this.setData({
            audioPlaying: false
          });
        });
      } else {
        console.error('无法获取TTS音频URL');
        this.setData({
          audioPlaying: false
        });
      }
    }).catch(err => {
      console.error('获取TTS音频失败:', err);
      this.setData({
        audioPlaying: false
      });
    });
  },
  
  /**
   * 获取TTS音频URL (实际项目中需实现)
   * 这里提供调用后端服务的示例
   */
  async getTTSAudioUrl(text) {
    return new Promise((resolve, reject) => {
      // 示例：调用后端TTS API
      // 由于这是演示项目，暂时返回null，实际项目中应调用真实的TTS服务
      // 如使用百度AI、腾讯AI、阿里云等提供的TTS服务
      
      // 示例API调用（请替换为实际的后端服务）
      /*
      wx.request({
        url: 'YOUR_BACKEND_TTS_API_URL',
        method: 'POST',
        data: {
          text: text,
          lang: 'en' // 或根据内容调整语言
        },
        success: (res) => {
          if (res.data && res.data.audioUrl) {
            resolve(res.data.audioUrl);
          } else {
            resolve(null);
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
      */
      
      // 演示项目中暂时返回null，实际部署时应实现真实的TTS服务
      // 可以考虑使用以下免费/有免费额度的服务：
      // 1. 百度AI开放平台TTS（每月有免费额度）
      // 2. 腾讯云语音合成（有免费额度）
      // 3. 阿里云语音合成（有免费额度）
      // 4. 微软Azure认知服务（有免费层级）
      
      console.log('TTS功能提示：在实际部署时，请实现后端TTS服务');
      resolve(null);
    });
  },

  /**
   * 完成所有任务后的按钮点击
   */
  onCompleteClick() {
    console.log('✅ 点击完成按钮，返回上一页');
    wx.navigateBack();
  },

  /**
   * 完成所有任务后的按钮点击
   */
  onCompleteClick() {
    console.log('✅ 点击完成按钮，返回上一页');
    wx.navigateBack();
  },

  /**
   * 完成所有任务后的按钮点击
   */
  onCompleteClick() {
    console.log('✅ 点击完成按钮，返回上一页');
    wx.navigateBack();
  },

  /**
   * 按下开始录音
   */
  onRecordStart() {
    console.log('========== 按下麦克风按钮 ==========');
    console.log('当前 isRecording 状态:', this.data.isRecording);
    
    // 如果已经在录音中，忽略
    if (this.data.isRecording) {
      console.log('已在录音中，忽略');
      return;
    }
    
    // Mock模式和常规模式都调用startRecording
    if (MOCK_MODE_ENABLED) {
      console.log('🎭 Mock模式：开始录音');
      this.startRecording();
      return;
    }
    
    // 检查录音权限
    wx.getSetting({
      success: (res) => {
        console.log('录音权限检查:', res.authSetting['scope.record']);
        
        if (!res.authSetting['scope.record']) {
          console.log('需要请求录音权限');
          // 请求录音权限
          wx.authorize({
            scope: 'scope.record',
            success: () => {
              console.log('录音权限授权成功');
              this.startRecording();
            },
            fail: () => {
              console.log('录音权限授权失败');
              wx.showModal({
                title: '提示',
                content: '需要录音权限才能进行对话练习',
                showCancel: false,
                success: (modalRes) => {
                  if (modalRes.confirm) {
                    // 跳转到设置页面
                    wx.openSetting({
                      success: (settingRes) => {
                        if (settingRes.authSetting['scope.record']) {
                          // 权限授予后不自动开始，需要用户再次按下
                        }
                      }
                    });
                  }
                }
              });
            }
          });
        } else {
          console.log('已有录音权限，开始录音');
          this.startRecording();
        }
      }
    });
  },

  /**
   * 松开结束录音
   */
  onRecordEnd() {
    console.log('========== 松开麦克风按钮 ==========');
    console.log('当前 isRecording 状态:', this.data.isRecording);
    
    // 只有在录音中才执行停止（Mock模式和常规模式统一处理）
    if (this.data.isRecording) {
      this.stopRecording();
    }
  },

  /**
   * 开始录音和识别
   */
  startRecording() {
    // Mock模式下不需要检查recognizer
    if (!MOCK_MODE_ENABLED && !this.recognizer) {
      wx.showModal({
        title: '未配置语音识别',
        content: '请先在代码中配置腾讯云密钥。\n\n获取密钥：https://console.cloud.tencent.com/cam/capi',
        showCancel: false
      });
      return;
    }

    // 如果正在录音，阻止重复调用
    if (this.data.isRecording) {
      console.log('正在录音中，忽略重复调用');
      return;
    }

    this.startRecordingInternal();
  },

  /**
   * 重新初始化识别器
   */
  reinitRecognizer() {
    console.log('重新初始化识别器');
    // SDK使用单例模式，直接重新设置回调即可
    this.setupRecognizerCallbacks();
  },

  /**
   * 设置识别器回调
   */
  setupRecognizerCallbacks() {
    if (!this.recognizer) return;

    this.recognizer.OnRecognitionStart = (res) => {
      console.log('识别开始:', res);
      
      // 不再显示"正在识别..."提示，只在loading中显示
    };

    this.recognizer.OnSentenceBegin = (res) => {
      console.log('句子开始:', res);
    };

    this.recognizer.OnRecognitionResultChange = (res) => {
      console.log('识别中间结果:', res);
      
      // 实时更新识别的中间结果
      if (res && res.result && res.result.voice_text_str) {
        const intermediateText = res.result.voice_text_str;
        console.log('实时识别:', intermediateText);
        this.updateUserResponse(intermediateText);
      }
    };

    this.recognizer.OnSentenceEnd = (res) => {
      console.log('句子结束:', res);
      
      // 更新句子结束的最终结果
      if (res && res.result && res.result.voice_text_str) {
        const finalText = res.result.voice_text_str;
        console.log('句子识别完成:', finalText);
        this.updateUserResponse(finalText);
      }
    };

    this.recognizer.OnRecognitionComplete = (res) => {
      console.log('========== 识别完成回调 ==========');
      console.log('识别完成结果:', res);
      console.log('回调时 isRecording 状态:', this.data.isRecording);

      // 确保录音状态被重置（兜底保护）
      if (this.data.isRecording) {
        console.log('⚠️ 识别完成时录音状态未重置，执行兜底重置');
        this.setData({
          isRecording: false
        });
      }

      if (res && res.result && res.result.voice_text_str) {
        const recognizedText = res.result.voice_text_str;
        console.log('✓ 识别到最终文本:', recognizedText);
        // 更新为最终结果（可能与实时结果略有差异）
        this.updateUserResponse(recognizedText);
        
        // 保存识别文本
        this.setData({
          userRecognizedText: recognizedText
        });
        
        // 识别完成后进行评分
        setTimeout(() => {
          this.evaluateUserAnswer(recognizedText);
        }, 500);
      } else {
        console.log('⚠️ 未识别到内容');
        
        // 不显示"未识别到内容"提示，静默处理
      }
      
      console.log('========== 识别完成回调结束 ==========');
    };

    this.recognizer.OnError = (err) => {
      console.error('识别错误:', err);

      // 重置录音状态
      this.setData({
        isRecording: false
      });

      let errorMsg = '语音识别失败';
      if (err && err.code) {
        switch (err.code) {
          case 6000:
            errorMsg = '网络错误';
            break;
          case 6001:
            errorMsg = '连接未建立';
            break;
          case 6002:
            errorMsg = '鉴权失败，请检查密钥配置';
            break;
          case 6003:
            errorMsg = '连接已关闭';
            break;
          default:
            errorMsg = err.message || '识别失败';
        }
      }

      wx.showToast({
        title: errorMsg,
        icon: 'none',
        duration: 2000
      });
    };
  },

  /**
   * 内部启动录音方法
   */
  startRecordingInternal() {
    // 创建新的录音会话 ID
    this.currentRecordingId = Date.now();
    
    this.setData({
      isRecording: true
    });

    // Mock模式：模拟ASR识别流程
    if (MOCK_MODE_ENABLED) {
      this.simulateMockASR();
      return;
    }

    // 真实ASR识别
    this.recognizeSpeechWithAPI('');
  },  /**
   * 停止录音和识别
   */
  stopRecording() {
    console.log('========== stopRecording 调用 ==========');
    console.log('当前 isRecording:', this.data.isRecording);
    
    if (!this.data.isRecording) {
      console.log('⚠️ 未在录音中，忽略停止操作');
      return;
    }
    
    console.log('✓ 正在停止录音...');
    
    // 先更新UI状态
    this.setData({
      isRecording: false
    }, () => {
      console.log('✓ isRecording 已设置为 false，当前值:', this.data.isRecording);
    });
    
    // 停止识别器（Mock模式下跳过）
    if (!MOCK_MODE_ENABLED && this.recognizer) {
      try {
        console.log('→ 调用 recognizer.stop()');
        this.recognizer.stop();
        console.log('✓ 识别器已停止');
      } catch (error) {
        console.error('❌ 停止识别器失败:', error);
      }
    } else {
      console.warn('⚠️ recognizer 不存在');
    }
    
    wx.showToast({
      title: '录音已停止',
      icon: 'none',
      duration: 1500
    });
    
    console.log('========== stopRecording 完成 ==========');
  },

  /**
   * 处理录音结果（已由recognizer回调处理）
   */
  handleRecordResult(result: any) {
    // 使用腾讯云SDK后，识别结果会在recognizer的回调中处理
    // 保留此方法以防需要额外的录音处理逻辑
    console.log('录音处理（由SDK回调处理）', result);
  },

  /**
   * 将语音转换为文字
   */
  convertSpeechToText(result: any) {
    if (result.tempFilePath) {
      // 优先尝试使用微信语音识别API（需要后端支持）
      // 如果后端服务不可用，则使用模拟识别
      this.recognizeSpeechWithAPI(result.tempFilePath);
    } else {
      wx.hideLoading();
      wx.showToast({
        title: '录音文件不存在',
        icon: 'none'
      });
    }
  },
  
  /**
   * 初始化语音识别（从环境变量读取临时凭证）
   */
  initSpeechRecognition() {
    // 从配置文件读取临时凭证
    const tmpSecretId = envConfig.TMP_SECRET_ID || '';
    const tmpSecretKey = envConfig.TMP_SECRET_KEY || '';
    const token = envConfig.TMP_TOKEN || '';
    
    if (!tmpSecretId || !tmpSecretKey || !token) {
      console.warn('⚠️ 未配置临时凭证');
      console.warn('请在 miniprogram/config/env.js 中配置以下变量：');
      console.warn('- TMP_SECRET_ID');
      console.warn('- TMP_SECRET_KEY');
      console.warn('- TMP_TOKEN');
      return;
    }
    
    // 存储临时凭证
    this.tempCredentials = {
      TmpSecretId: tmpSecretId,
      TmpSecretKey: tmpSecretKey,
      Token: token
    };
    
    console.log('✅ 已从配置文件加载临时安全凭证');
    
    // 获取识别器实例
    this.recognizer = QCloudASR.getRecorderSpeechRecognizer(true);
    
    // 设置回调
    this.setupRecognizerCallbacks();
    console.log('✅ 语音识别初始化完成');
  },
  
  /**
   * 使用腾讯云实时流式语音识别（使用临时凭证）
   */
  recognizeSpeechWithAPI(audioPath: string) {
    console.log('开始语音识别');
    
    if (!this.recognizer) {
      wx.hideLoading();
      wx.showModal({
        title: '未初始化语音识别',
        content: '请稍后重试',
        showCancel: false
      });
      return;
    }
    
    if (!this.tempCredentials) {
      wx.hideLoading();
      wx.showToast({
        title: '未配置临时凭证',
        icon: 'none'
      });
      return;
    }
    
    // 配置识别参数（使用临时凭证）
    const recognizeParams = {
      appid: envConfig.APP_ID || '1319046966',  // 从配置读取 AppID
      secretid: this.tempCredentials.TmpSecretId,
      secretkey: this.tempCredentials.TmpSecretKey,
      token: this.tempCredentials.Token,  // 临时凭证的Token
      engine_model_type: '16k_en',  // 16k英文（可改为 16k_zh 中文）
      voice_format: 1,  // 1: pcm, 8: mp3
      hotword_id: '',
      needvad: 1,
      filter_dirty: 0,
      filter_modal: 0,
      filter_punc: 0,
      convert_num_mode: 1,
      word_info: 0
    };
    
    try {
      // 启动识别（SDK会自动处理录音）
      this.recognizer.start(recognizeParams);
      console.log('识别已启动');
    } catch (error) {
      console.error('启动识别失败:', error);
      wx.hideLoading();
      wx.showToast({
        title: '启动识别失败',
        icon: 'none',
        duration: 2000
      });
    }
  },

  /**
   * 更新用户回答
   */
  updateUserResponse(text: string) {
    if (!text) return;
    
    const recordingId = this.currentRecordingId;
    let updatedDialogList = [...this.data.dialogList];
    
    // 查找当前录音会话对应的对话
    const existingIndex = updatedDialogList.findIndex(
      dialog => dialog.type === 'user' && dialog.recordingId === recordingId
    );
    
    if (existingIndex >= 0) {
      // 更新现有的对话（实时识别中）
      updatedDialogList[existingIndex] = {
        ...updatedDialogList[existingIndex],
        content: text
      };
    } else {
      // 添加新的用户回答
      const newDialogId = this.data.dialogIdCounter + 1;
      updatedDialogList.push({
        id: newDialogId,
        recordingId: recordingId,
        type: 'user',
        content: text,
        feedbackResult: null // 每个气泡保存自己的反馈结果
      });
      
      this.setData({
        dialogIdCounter: newDialogId
      });
    }
    
    // 更新对话列表
    this.setData({
      dialogList: updatedDialogList
    });
  },

  /**
   * 评估用户回答（方案四：混合评分法）
   */
  evaluateUserAnswer(userText: string) {
    if (!userText || !this.data.currentTaskData) {
      console.log('缺少评分必要数据');
      return;
    }

    const task = this.data.currentTaskData;
    const userAnswer = userText.toLowerCase().trim();
    let totalScore = 0;
    const details: any = {};

    // 1. 关键词覆盖率评分（30分）
    const keywords = task.keywordsHint || [];
    let keywordMatches = 0;
    keywords.forEach(keyword => {
      if (userAnswer.includes(keyword.toLowerCase())) {
        keywordMatches++;
      }
    });
    const keywordScore = keywords.length > 0 ? (keywordMatches / keywords.length) * 30 : 30;
    totalScore += keywordScore;
    details.keywordScore = keywordScore;
    details.keywordMatches = keywordMatches;
    details.totalKeywords = keywords.length;

    // 2. 句式相似度评分（40分）
    // 仅使用新结构
    const tips = task.tips || {};
    const templates = [
      task.user,
      tips.simple,
      tips.natural,
      tips.native
    ].filter(Boolean);
    
    let maxSimilarity = 0;
    templates.forEach(template => {
      if (template) {
        const similarity = this.calculateSimilarity(userAnswer, template.toLowerCase());
        maxSimilarity = Math.max(maxSimilarity, similarity);
      }
    });
    const similarityScore = maxSimilarity * 40;
    totalScore += similarityScore;
    details.similarityScore = similarityScore;
    details.maxSimilarity = maxSimilarity;

    // 3. 长度合理性评分（30分）
    // 基于模板平均长度判断
    const avgTemplateLength = templates.reduce((sum, t) => sum + (t ? t.length : 0), 0) / Math.max(templates.length, 1);
    const lengthRatio = userAnswer.length / Math.max(avgTemplateLength, 1);
    let lengthScore = 30;
    if (lengthRatio < 0.5 || lengthRatio > 2) {
      lengthScore = 15; // 长度差异过大
    } else if (lengthRatio < 0.7 || lengthRatio > 1.5) {
      lengthScore = 22; // 长度有些差异
    }
    totalScore += lengthScore;
    details.lengthScore = lengthScore;

    // 确定反馈类型
    const feedbackType = totalScore >= 80 ? 'perfect' : 'tips';
    
    console.log('评分结果:', {
      totalScore,
      feedbackType,
      details
    });

    // 将反馈结果保存到对应的用户气泡中
    const recordingId = this.currentRecordingId;
    const updatedDialogList = this.data.dialogList.map(dialog => {
      if (dialog.type === 'user' && dialog.recordingId === recordingId) {
        return {
          ...dialog,
          feedbackResult: {
            type: feedbackType,
            score: totalScore,
            details: details
          }
        };
      }
      return dialog;
    });
    
    this.setData({
      dialogList: updatedDialogList,
      feedbackResult: {
        type: feedbackType,
        score: totalScore,
        details: details
      }
    });

    // 根据反馈类型执行不同操作
    if (feedbackType === 'perfect') {
      // 完美回答，标记当前任务完成
      console.log('🎉 完美回答，标记任务完成并继续对话');
      this.markCurrentTaskCompleted();
      setTimeout(() => {
        this.continueDialog();
      }, 2000);
    } else {
      // 需要优化，展示示例答案弹窗
      console.log('💡 需要优化，展示示例答案');
      setTimeout(() => {
        this.showExamplesWithOptions();
      }, 500);
    }
  },

  /**
   * 计算两个字符串的相似度（使用Levenshtein距离）
   */
  calculateSimilarity(str1: string, str2: string): number {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix: number[][] = [];

    // 初始化矩阵
    for (let i = 0; i <= len1; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
      matrix[0][j] = j;
    }

    // 计算编辑距离
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // 删除
          matrix[i][j - 1] + 1,      // 插入
          matrix[i - 1][j - 1] + cost // 替换
        );
      }
    }

    const distance = matrix[len1][len2];
    const maxLen = Math.max(len1, len2);
    return maxLen === 0 ? 1 : 1 - distance / maxLen;
  },

  /**
   * 点击反馈按钮，显示示例答案（仅查看）
   */
  onShowExamples(event: any) {
    // 从 data-result 获取该气泡的反馈结果
    const bubbleFeedbackResult = event.currentTarget.dataset.result;
    this.showExamplesModal(false, bubbleFeedbackResult);
  },

  /**
   * 展示带选项的示例答案弹窗（tips时自动调用）
   */
  showExamplesWithOptions() {
    // 使用全局的 feedbackResult
    this.showExamplesModal(true, this.data.feedbackResult);
  },

  /**
   * 展示示例答案弹窗
   * @param withOptions 是否显示“继续吧”和“再试一次”选项
   * @param feedbackResult 要显示的反馈结果
   */
  showExamplesModal(withOptions: boolean, feedbackResult: any) {
    const task = this.data.currentTaskData;
    if (!task || !task.tips) {
      wx.showToast({
        title: '暂无示例答案',
        icon: 'none'
      });
      return;
    }

    this.setData({
      showFeedbackModal: true,
      modalWithOptions: withOptions
    });
  },

  /**
   * 弹窗点击重试
   */
  onModalRetry() {
    console.log('用户选择：再试一次');
    this.setData({ showFeedbackModal: false });
    this.retryAnswer();
  },

  /**
   * 弹窗点击继续
   */
  onModalContinue() {
    console.log('用户选择：继续对话');
    this.setData({ showFeedbackModal: false });
    // 标记当前任务完成
    this.markCurrentTaskCompleted();
    // 延迟后继续对话
    setTimeout(() => {
      this.continueDialog();
    }, 500);
  },

  /**
   * 关闭弹窗（仅查看模式）
   */
  onModalClose() {
    this.setData({ showFeedbackModal: false });
  },

  /**
   * 标记当前任务为已完成
   */
  markCurrentTaskCompleted() {
    const currentIdx = this.data.currentTaskIdx;
    if (currentIdx >= 0 && currentIdx < 3) {
      const newStatus = [...this.data.tasksCompletionStatus];
      newStatus[currentIdx] = true;
      this.setData({
        tasksCompletionStatus: newStatus
      });
      console.log(`✅ 任务 ${currentIdx + 1} 已标记为完成，完成状态:`, newStatus);
    }
  },

  /**
   * 继续对话（bot继续下一轮）
   * 每个关卡固定3个任务
   */
  continueDialog() {
    console.log('继续对话，当前任务索引:', this.data.currentTaskIdx);
    console.log('🐾 继续对话...');
    
    // 获取下一个任务
    const nextTaskIdx = this.data.currentTaskIdx + 1;
    const allTasks = this.data.allTasks;
    
    if (!allTasks || allTasks.length !== 3) {
      console.error('任务列表异常，期望3个任务');
      return;
    }
    
    // 检查是否已完成所有3个任务
    if (nextTaskIdx >= 3) {
      // 已经完成所有3个任务
      console.log('✅ 所有任务已完成！');
      
      // 检查是否所有任务都标记为完成
      const allCompleted = this.data.tasksCompletionStatus.every(status => status === true);
      
      if (allCompleted) {
        // 所有任务都已完成，设置完成状态，按钮变为对号
        this.setData({
          allTasksCompleted: true
        });
        
        // 延迟显示胜利弹窗
        setTimeout(() => {
            this.setData({
                showWinModal: true
            });
        }, 1000);
      } else {
        console.log('⚠️ 还有任务未完成，请完成所有任务');
        wx.showToast({
          title: '请完成所有任务',
          icon: 'none',
          duration: 2000
        });
      }
      
      return;
    }
    
    // 获取下一个任务
    const nextTask = allTasks[nextTaskIdx];
    console.log(`下一个任务 (${nextTaskIdx + 1}/3):`, nextTask);
    
    // 更新当前任务索引
    this.setData({
      currentTaskIdx: nextTaskIdx,
      feedbackResult: null, // 清除上一次的反馈结果
      userRecognizedText: '' // 清除上一次的识别文本
    });
    
    // 以追加模式初始化新任务
    this.initDialogData(nextTask, true);
    
    // 更新进度（3个任务：33%, 67%, 100%）
    const progress = Math.round(((nextTaskIdx + 1) / 3) * 100);
    this.setData({
      progress: progress
    });
  },

  /**
   * 再试一次（不删除历史回答，只是等待用户重新录音）
   */
  retryAnswer() {
    console.log('🔄 再试一次...');
    
    // 不删除任何对话，保留所有历史记录
    // 只需要清除当前状态，等待用户重新录音
    this.setData({
      userRecognizedText: '',
      feedbackResult: null // 清除全局反馈结果，但每个气泡自己的反馈仍然保留
    });
    
    wx.showToast({
      title: '请再次回答',
      icon: 'none',
      duration: 1500
    });
  },

  /**
   * 显示反馈
   */
  showFeedback() {
    // 模拟一个反馈
    wx.showModal({
      title: '练习完成',
      content: '您的回答很棒！',
      showCancel: false,
      success: (res) => {
        if (res.confirm) {
          // 可以在这里添加下一题的逻辑
          console.log('用户确认');
        }
      }
    });
  },

  /**
   * 处理Mock录音（模拟用户回答）
   */
  /**
   * 模拟ASR识别流程（复用真实ASR的所有回调逻辑）
   */
  simulateMockASR() {
    if (!this.data.currentTaskData || !this.data.currentTaskData.taskId) {
      console.log('⚠️ 无法获取当前任务ID');
      // 模拟错误回调
      if (this.recognizer && this.recognizer.OnError) {
        this.recognizer.OnError({ code: 9999, message: '无法获取任务ID' });
      }
      return;
    }

    const taskId = this.data.currentTaskData.taskId;
    const mockAnswer = mockData?.mockAnswers?.[taskId];

    if (!mockAnswer) {
      console.log(`⚠️ 未找到任务 ${taskId} 的Mock答案`);
      // 模拟错误回调
      if (this.recognizer && this.recognizer.OnError) {
        this.recognizer.OnError({ code: 9998, message: '未配置Mock数据' });
      }
      return;
    }

    console.log(`🎭 Mock模式：模拟ASR识别流程，答案: ${mockAnswer}`);

    // 模拟识别开始回调
    setTimeout(() => {
      if (this.recognizer && this.recognizer.OnRecognitionStart) {
        console.log('🎭 Mock: 触发 OnRecognitionStart');
        this.recognizer.OnRecognitionStart({ message: 'Mock recognition started' });
      }
    }, 100);

    // 模拟句子开始回调
    setTimeout(() => {
      if (this.recognizer && this.recognizer.OnSentenceBegin) {
        console.log('🎭 Mock: 触发 OnSentenceBegin');
        this.recognizer.OnSentenceBegin({ message: 'Mock sentence begin' });
      }
    }, 200);

    // 模拟实时识别结果（分段显示，模拟真实打字效果）
    const words = mockAnswer.split(' ');
    let partialText = '';
    words.forEach((word, index) => {
      setTimeout(() => {
        partialText += (index > 0 ? ' ' : '') + word;
        if (this.recognizer && this.recognizer.OnRecognitionResultChange) {
          console.log(`🎭 Mock: 触发 OnRecognitionResultChange - ${partialText}`);
          this.recognizer.OnRecognitionResultChange({
            result: {
              voice_text_str: partialText
            }
          });
        }
      }, 300 + index * 150);
    });

    // 模拟句子结束回调
    setTimeout(() => {
      if (this.recognizer && this.recognizer.OnSentenceEnd) {
        console.log('🎭 Mock: 触发 OnSentenceEnd');
        this.recognizer.OnSentenceEnd({
          result: {
            voice_text_str: mockAnswer
          }
        });
      }
    }, 300 + words.length * 150 + 100);

    // 模拟识别完成回调
    setTimeout(() => {
      if (this.recognizer && this.recognizer.OnRecognitionComplete) {
        console.log('🎭 Mock: 触发 OnRecognitionComplete');
        this.recognizer.OnRecognitionComplete({
          result: {
            voice_text_str: mockAnswer
          }
        });
      }
    }, 300 + words.length * 150 + 200);
  },

  /**
   * 页面卸载时清理资源
   */
  onUnload() {
    // 停止 TTS 播放
    ttsManager.stop();
    console.log('🗑️ 页面卸载，已清理 TTS 资源');
  },

  /**
   * 页面隐藏时暂停 TTS
   */
  onHide() {
    // 暂停 TTS 播放
    ttsManager.pause();
    console.log('⏸️ 页面隐藏，已暂停 TTS');
  }
})
