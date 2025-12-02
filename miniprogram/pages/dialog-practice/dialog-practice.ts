// pages/dialog-practice/dialog-practice.ts
// 引入腾讯云语音识别SDK
const QCloudASR = require('../../lib/asr.min.js');
// 引入环境变量配置
const envConfig = require('../../config/env.js');

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
    showNpcText: false,    // 是否显示NPC文本
    showUserResponse: false, // 是否显示用户回答
    isRecording: false,    // 是否正在录音
    npcDialogContent: '' // NPC对话内容
  },
  
  // 音频上下文
  audioContext: null,
  innerAudioContext: null,
  recognizer: null,  // 语音识别实例
  tempCredentials: null,  // 临时安全凭证
  currentRecordingId: null,  // 当前录音会话 ID

  /**
   * 页面加载
   */
  onLoad(options) {
    console.log('对话练习页面加载', options);
    
    // 初始化语音识别
    this.initSpeechRecognition();
    // 从参数中获取script.json路径和任务信息
    if (options.scriptPath && options.levelId && options.taskId) {
      // 由于微信小程序限制，我们需要通过其他方式加载数据
      // 这里提供两种方案：直接在参数中传递数据，或使用全局数据
      if (options.taskData) {
        // 如果任务数据直接通过参数传递
        try {
          const taskData = JSON.parse(decodeURIComponent(options.taskData));
          this.processScriptDataFromParam(taskData, options.levelId, options.taskId);
        } catch (e) {
          console.error('解析任务数据失败:', e);
          this.loadTaskData(options.scriptPath, options.levelId, options.taskId);
        }
      } else {
        this.loadTaskData(options.scriptPath, options.levelId, options.taskId);
      }
    } else {
      // 如果没有传入参数，使用默认数据
      this.loadDefaultData();
    }
  },

  /**
   * 从参数处理任务数据
   */
  processScriptDataFromParam(taskData, levelId, taskId) {
    console.log('处理传入的任务数据:', taskData);
    console.log('NPC数据:', taskData.npc);
    console.log('机器人问题 (simple):', taskData.botQuestions && taskData.botQuestions.simple);
    console.log('用户回答 (simple):', taskData.userAnswers && taskData.userAnswers.simple);
    console.log('关键词提示:', taskData.keywordsHint);
    this.initDialogData(taskData);
  },

  /**
   * 加载任务数据
   */
  loadTaskData(scriptPath, levelId, taskId) {
    // 由于微信小程序限制，本地文件访问受限制
    // 我们将使用 wx.request 尝试访问，但更多依赖参数传递的数据
    console.warn('推荐通过参数传递任务数据，而不是通过文件路径加载');
    this.loadDefaultData();
  },

  /**
   * 处理脚本数据
   */
  processScriptData(scriptData, levelId, taskId) {
    console.log('处理脚本数据:', scriptData, levelId, taskId);
    
    // 查找对应的关卡和任务
    let level = null;
    let task = null;
    
    if (scriptData.levels) {
      level = scriptData.levels.find(lvl => lvl.levelId === levelId);
      if (level && level.tasks) {
        task = level.tasks.find(t => t.taskId === taskId);
      }
    }
    
    if (task) {
      this.initDialogData(task);
    } else {
      console.error('未找到指定的任务:', levelId, taskId);
      this.loadDefaultData();
    }
  },

  /**
   * 初始化对话数据
   */
  initDialogData(task) {
    console.log('初始化对话数据:', task);
    
    // 提取数据
    const botQuestion = (task.botQuestions && task.botQuestions.simple) || (task.botQuestions && task.botQuestions.natural) || 'Hello!';
    const userAnswer = (task.userAnswers && task.userAnswers.simple) || (task.userAnswers && task.userAnswers.natural) || 'Hi there!';
    const keywordsHint = task.keywordsHint || [];
    const npcAnimal = (task.npc && task.npc.animal) || 'A';
    
    // 创建对话列表 - 只包含当前任务的对话
    const dialogList = [
      {
        id: 1,
        type: 'npc',
        content: botQuestion,
        // 在实际项目中，这里应该包含音频URL
        // audioUrl: task.audio?.npcSimple || '' 
      },
      {
        id: 2,
        type: 'user',
        content: userAnswer,
        feedback: 'Perfect' // 模拟用户回答反馈
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
      showNpcText: false, // 默认不显示NPC文本
      showUserResponse: false // 默认不显示用户回答
    });
    
    // NPC对话默认语音播放
    this.playTextAsAudio(botQuestion);
  },

  /**
   * 加载默认数据
   */
  loadDefaultData() {
    const defaultData = {
      botQuestions: {
        simple: "Hello! Do you need help finding the baggage claim?"
      },
      userAnswers: {
        simple: "Yes, where is the baggage claim?"
      },
      keywordsHint: ["baggage", "claim", "luggage", "where", "find"],
      npc: {
        animal: "Panda",
        role: "Airport Information Desk Staff"
      },
      taskId: "default_task"
    };
    
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
   * 点击播放音频
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
   * 切换NPC文本显示状态（点击'A'按钮）
   */
  toggleNpcTextDisplay() {
    const currentShowNpcText = this.data.showNpcText;
    this.setData({
      showNpcText: !currentShowNpcText
    });
    
    console.log(currentShowNpcText ? '收回NPC文本显示' : '展示NPC文本内容');
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
    
    // 只有在录音中才执行停止
    if (this.data.isRecording) {
      this.stopRecording();
    }
  },

  /**
   * 开始录音（废弃的点击方法，保留以防兼容）
   */
  onRecord() {
    console.log('========== onRecord 按钮点击（废弃） ==========');
    console.log('当前 isRecording 状态:', this.data.isRecording);
    console.log('recognizer 是否存在:', !!this.recognizer);
    
    // 不再使用点击切换模式，此方法保留但不执行任何操作
    console.log('提示：现在使用按住录音模式');
  },

  /**
   * 切换录音状态（废弃，现在使用按住模式）
   */
  toggleRecording() {
    console.log('========== toggleRecording 调用（废弃） ==========');
    // 不再使用切换模式
  },

  /**
   * 开始录音和识别
   */
  startRecording() {
    if (!this.recognizer) {
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
        
        // 识别完成后显示反馈（可选，根据需求决定是否保留）
        // setTimeout(() => {
        //   this.showFeedback();
        // }, 500);
      } else {
        console.log('⚠️ 未识别到内容');
        
        wx.showToast({
          title: '未识别到内容',
          icon: 'none',
          duration: 2000
        });
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

    // 直接调用识别（SDK内部会处理录音）
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
    
    // 停止识别器
    if (this.recognizer) {
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
      updatedDialogList.push({
        id: recordingId,
        recordingId: recordingId,
        type: 'user',
        content: text
      });
    }
    
    // 显示用户回答
    this.setData({
      dialogList: updatedDialogList,
      showUserResponse: true
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
  }
})