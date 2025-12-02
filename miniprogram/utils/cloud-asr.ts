/**
 * 云函数语音识别工具类
 * 通过云函数安全地调用腾讯云ASR服务
 */

interface RecognitionOptions {
  engine_model_type?: string;  // 16k_en, 16k_zh, 16k_ca, 8k_zh
  voice_format?: number;       // 1: pcm, 8: mp3
}

class CloudASR {
  /**
   * 初始化云函数
   */
  static async init() {
    if (!wx.cloud) {
      throw new Error('请先初始化云开发环境');
    }
    
    try {
      // 获取云端配置（不含密钥）
      const res = await wx.cloud.callFunction({
        name: 'speechRecognition',
        data: {
          action: 'getConfig'
        }
      });
      
      if (res.result.success) {
        console.log('✅ 云函数语音识别初始化成功');
        return res.result.config;
      } else {
        throw new Error(res.result.error);
      }
    } catch (error) {
      console.error('云函数初始化失败:', error);
      throw error;
    }
  }
  
  /**
   * 录音并识别（使用云函数）
   */
  static async recognizeWithRecorder(options: RecognitionOptions = {}) {
    return new Promise((resolve, reject) => {
      const recorderManager = wx.getRecorderManager();
      
      recorderManager.onStart(() => {
        console.log('开始录音');
      });
      
      recorderManager.onStop(async (res) => {
        console.log('录音结束，文件路径:', res.tempFilePath);
        
        try {
          wx.showLoading({ title: '正在识别...', mask: true });
          
          // 上传音频到云存储
          const uploadResult = await wx.cloud.uploadFile({
            cloudPath: `audio/${Date.now()}.mp3`,
            filePath: res.tempFilePath
          });
          
          console.log('音频已上传到云存储:', uploadResult.fileID);
          
          // 调用云函数进行识别
          const recognizeResult = await wx.cloud.callFunction({
            name: 'speechRecognition',
            data: {
              action: 'recognize',
              audioFileID: uploadResult.fileID,
              options: {
                engine_model_type: options.engine_model_type || '16k_en',
                voice_format: options.voice_format || 8  // mp3
              }
            }
          });
          
          wx.hideLoading();
          
          if (recognizeResult.result.success) {
            resolve(recognizeResult.result.result);
          } else {
            reject(new Error(recognizeResult.result.error));
          }
          
          // 删除云存储文件（可选）
          wx.cloud.deleteFile({
            fileList: [uploadResult.fileID]
          });
          
        } catch (error) {
          wx.hideLoading();
          reject(error);
        }
      });
      
      recorderManager.onError((error) => {
        console.error('录音错误:', error);
        reject(error);
      });
      
      // 开始录音
      recorderManager.start({
        duration: 60000,  // 最长60秒
        format: 'mp3',
        sampleRate: 16000,
        numberOfChannels: 1,
        encodeBitRate: 48000,
        frameSize: 10
      });
      
      // 返回停止录音的方法
      return {
        stop: () => recorderManager.stop()
      };
    });
  }
}

export default CloudASR;
