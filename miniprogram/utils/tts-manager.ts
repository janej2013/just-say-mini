/**
 * TTS 管理器
 * 高层封装，负责调用 TTS 客户端并管理播放
 */

import TencentTTSClient from './tts-client';

// 从配置文件读取密钥
const envConfig = require('../config/env.js');

interface TTSOptions {
  text: string;
  voiceType?: number;
  speed?: number;
  volume?: number;
  primaryLanguage?: number;
  emotionCategory?: string;
}

interface PlayOptions {
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

// NPC 动物与音色的映射
const NPC_VOICE_MAP: Record<string, number> = {
  'Panda': 501009,     // 外语女声 WeWinny
  'Owl': 501008,       // 外语男声 WeJames
  'Koala': 501009,     // 外语女声 WeWinny
  'Elephant': 501008,  // 外语男声 WeJames
  'Giraffe': 501009,   // 外语女声 WeWinny
  'Beaver': 501008,    // 外语男声 WeJames
  'Hippo': 501008,     // 外语男声 WeJames
  'Parrot': 501009,    // 外语女声 WeWinny
  'Squirrel': 501009   // 外语女声 WeWinny
};

class TTSManager {
  private client: TencentTTSClient | null = null;
  private innerAudioContext: WechatMiniprogram.InnerAudioContext | null = null;
  private audioCache: Map<string, string> = new Map();
  private isInitialized: boolean = false;

  /**
   * 初始化 TTS 客户端
   */
  private init() {
    if (this.isInitialized) return;

    try {
      this.client = new TencentTTSClient({
        secretId: envConfig.TMP_SECRET_ID,
        secretKey: envConfig.TMP_SECRET_KEY,
        token: envConfig.TMP_TOKEN,
        region: 'ap-guangzhou'
      });
      this.isInitialized = true;
      console.log('✅ TTS 客户端初始化成功');
    } catch (error) {
      console.error('❌ TTS 客户端初始化失败:', error);
      throw error;
    }
  }

  /**
   * 根据 NPC 动物获取音色
   */
  getVoiceTypeByNPC(npcAnimal: string): number {
    return NPC_VOICE_MAP[npcAnimal] || 501009; // 默认使用外语女声
  }

  /**
   * 文本转语音并播放
   */
  async speak(options: TTSOptions, playOptions?: PlayOptions): Promise<void> {
    // 确保客户端已初始化
    if (!this.isInitialized) {
      this.init();
    }

    if (!this.client) {
      throw new Error('TTS 客户端未初始化');
    }

    const {
      text,
      voiceType = 501009, // 默认外语女声 WeWinny
      speed = 3,
      volume = 0,
      primaryLanguage = 2,
      emotionCategory = 'happy'
    } = options;

    // 生成缓存 key
    const cacheKey = `${text}_${voiceType}_${speed}`;

    try {
      let audioBase64 = this.audioCache.get(cacheKey);

      // 如果缓存中没有，则调用 API
      if (!audioBase64) {
        wx.showLoading({ title: '加载语音...', mask: true });

        console.log('调用 TTS API:', {
          text: text.substring(0, 50) + '...',
          voiceType,
          speed,
          primaryLanguage,
          emotionCategory
        });
        // 调用腾讯云 TTS API
        const result = await this.client.textToVoice({
          Text: text,
          SessionId: `session-${Date.now()}`,
          VoiceType: voiceType,
          Speed: speed,
          Volume: volume,
          PrimaryLanguage: primaryLanguage,
          EmotionCategory: emotionCategory,
          Codec: 'mp3',
          SampleRate: 16000
        });

        wx.hideLoading();

        audioBase64 = result.Audio;
        
        // 缓存音频（最多缓存 20 条）
        if (this.audioCache.size >= 20) {
          const firstKey = this.audioCache.keys().next().value;
          this.audioCache.delete(firstKey);
        }
        this.audioCache.set(cacheKey, audioBase64);
        
        console.log('✅ TTS 音频生成成功');
      } else {
        console.log('📦 使用缓存的 TTS 音频');
      }

      // 播放音频
      await this.playAudio(audioBase64, playOptions);

    } catch (error) {
      wx.hideLoading();
      console.error('❌ TTS 失败:', error);
      
      if (playOptions?.onError) {
        playOptions.onError(error);
      }
      
      // 显示错误提示
      wx.showToast({
        title: '语音加载失败',
        icon: 'none',
        duration: 2000
      });
      
      throw error;
    }
  }

  /**
   * 播放 Base64 音频
   */
  private async playAudio(audioBase64: string, playOptions?: PlayOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      // 停止当前播放
      if (this.innerAudioContext) {
        this.innerAudioContext.destroy();
      }

      this.innerAudioContext = wx.createInnerAudioContext();

      // 将 Base64 写入临时文件
      const fs = wx.getFileSystemManager();
      const filePath = `${wx.env.USER_DATA_PATH}/tts_${Date.now()}.mp3`;

      fs.writeFile({
        filePath,
        data: audioBase64,
        encoding: 'base64',
        success: () => {
          if (!this.innerAudioContext) return;

          this.innerAudioContext.src = filePath;

          this.innerAudioContext.onPlay(() => {
            console.log('🔊 TTS 播放开始');
            if (playOptions?.onStart) {
              playOptions.onStart();
            }
          });

          this.innerAudioContext.onEnded(() => {
            console.log('⏹️ TTS 播放结束');
            if (playOptions?.onEnd) {
              playOptions.onEnd();
            }
            resolve();
          });

          this.innerAudioContext.onError((err) => {
            console.error('❌ TTS 播放错误:', err);
            if (playOptions?.onError) {
              playOptions.onError(err);
            }
            reject(err);
          });

          this.innerAudioContext.play();
        },
        fail: (err) => {
          console.error('❌ 写入音频文件失败:', err);
          reject(err);
        }
      });
    });
  }

  /**
   * 停止播放
   */
  stop() {
    if (this.innerAudioContext) {
      this.innerAudioContext.stop();
      this.innerAudioContext.destroy();
      this.innerAudioContext = null;
      console.log('⏸️ TTS 播放已停止');
    }
  }

  /**
   * 暂停播放
   */
  pause() {
    if (this.innerAudioContext) {
      this.innerAudioContext.pause();
      console.log('⏸️ TTS 播放已暂停');
    }
  }

  /**
   * 清除缓存
   */
  clearCache() {
    this.audioCache.clear();
    console.log('🗑️ TTS 缓存已清除');
  }

  /**
   * 获取缓存大小
   */
  getCacheSize(): number {
    return this.audioCache.size;
  }
}

// 导出单例
export default new TTSManager();
