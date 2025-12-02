// pages/dialog-practice/dialog-practice.ts
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
  recorderManager: null,  // 录音管理器

  /**
   * 页面加载
   */
  onLoad(options) {
    console.log('对话练习页面加载', options);
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
    console.log('机器人问题 (simple):', taskData.botQuestions?.simple);
    console.log('用户回答 (simple):', taskData.userAnswers?.simple);
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
    const botQuestion = task.botQuestions?.simple || task.botQuestions?.natural || 'Hello!';
    const userAnswer = task.userAnswers?.simple || task.userAnswers?.natural || 'Hi there!';
    const keywordsHint = task.keywordsHint || [];
    const npcAnimal = task.npc?.animal || 'A';
    
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
   * 开始录音
   */
  onRecord() {
    // 检查录音权限
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.record']) {
          // 请求录音权限
          wx.authorize({
            scope: 'scope.record',
            success: () => {
              this.toggleRecording();
            },
            fail: () => {
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
                          this.toggleRecording();
                        }
                      }
                    });
                  }
                }
              });
            }
          });
        } else {
          this.toggleRecording();
        }
      }
    });
  },

  /**
   * 切换录音状态
   */
  toggleRecording() {
    if (!this.data.isRecording) {
      // 开始录音
      this.startRecording();
    } else {
      // 停止录音
      this.stopRecording();
    }
  },

  /**
   * 开始录音
   */
  startRecording() {
    if (!this.recorderManager) {
      this.recorderManager = wx.getRecorderManager();
      
      this.recorderManager.onStart(() => {
        console.log('开始录音');
        this.setData({
          isRecording: true
        });
      });

      this.recorderManager.onStop((res) => {
        console.log('录音结束', res);
        this.setData({
          isRecording: false
        });
        // 处理录音结果，这里可以上传音频或进行语音识别
        this.handleRecordResult(res);
      });

      this.recorderManager.onError((res) => {
        console.error('录音失败:', res);
        this.setData({
          isRecording: false
        });
        wx.showToast({
          title: '录音失败',
          icon: 'none'
        });
      });
    }

    const options = {
      duration: 10000, // 录音时长
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'mp3'
    };

    this.recorderManager.start(options);
  },

  /**
   * 停止录音
   */
  stopRecording() {
    if (this.recorderManager) {
      this.recorderManager.stop();
    }
  },

  /**
   * 处理录音结果
   */
  handleRecordResult(result: any) {
    console.log('录音处理结果', result);
    
    // 显示识别中的提示
    wx.showLoading({
      title: '正在识别...',
      mask: true
    });
    
    // 将录音转换为文字
    this.convertSpeechToText(result);
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
   * 通过API进行语音识别
   */
  recognizeSpeechWithAPI(audioPath: string) {
    // 使用后端API进行语音识别
    // 注意：需要配置实际的后端服务URL
    const apiUrl = 'https://your-server.com/api/speech-to-text'; // 需要替换为实际的后端服务URL
    
    // 检查是否配置了后端服务
    if (apiUrl.includes('your-server.com')) {
      wx.hideLoading();
      wx.showToast({
        title: '请配置语音识别服务',
        icon: 'none',
        duration: 2000
      });
      console.error('请配置后端服务URL以使用语音识别功能');
      return;
    }
    
    // 上传录音文件到服务器进行识别
    wx.uploadFile({
      url: apiUrl,
      filePath: audioPath,
      name: 'audio',
      header: {
        'content-type': 'multipart/form-data'
      },
      success: (res) => {
        wx.hideLoading();
        try {
          // 解析服务器返回的识别结果
          const data = JSON.parse(res.data);
          if (data.text && data.text.trim()) {
            this.updateUserResponse(data.text.trim());
          } else {
            // 如果服务器返回格式不正确
            wx.showToast({
              title: '识别结果格式错误',
              icon: 'none',
              duration: 2000
            });
            console.error('服务器返回格式不正确:', data);
          }
        } catch (e) {
          wx.showToast({
            title: '解析识别结果失败',
            icon: 'none',
            duration: 2000
          });
          console.error('解析语音识别结果失败:', e);
        }
      },
      fail: (error) => {
        wx.hideLoading();
        wx.showToast({
          title: '语音识别失败',
          icon: 'none',
          duration: 2000
        });
        console.error('语音识别上传失败:', error);
      }
    });
  },

  /**
   * 更新用户回答
   */
  updateUserResponse(text: string) {
    // 更新对话列表中的用户回答内容
    let updatedDialogList = this.data.dialogList.map(dialog => {
      if (dialog.type === 'user') {
        return {
          ...dialog,
          content: text
        };
      }
      return dialog;
    });
    
    // 如果对话列表中没有用户回答，则添加一个
    const hasUserDialog = updatedDialogList.some(dialog => dialog.type === 'user');
    if (!hasUserDialog) {
      updatedDialogList.push({
        id: Date.now(),
        type: 'user',
        content: text
      });
    }
    
    // 显示用户回答
    this.setData({
      dialogList: updatedDialogList,
      showUserResponse: true
    });
    
    // 可以添加反馈评分逻辑
    this.showFeedback();
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