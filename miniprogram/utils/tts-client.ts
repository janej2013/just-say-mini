/**
 * 腾讯云 TTS HTTP API 客户端
 * 直接调用腾讯云 API，无需 Node.js SDK
 */

// @ts-ignore
import * as CryptoJS from 'crypto-js';

interface TTSConfig {
  secretId: string;
  secretKey: string;
  token?: string;
  region?: string;
}

interface TTSParams {
  Text: string;           // 要合成的文本
  SessionId: string;      // 会话 ID
  VoiceType?: number;     // 音色 ID
  Speed?: number;         // 语速
  Volume?: number;        // 音量
  PrimaryLanguage?: number; // 语言
  Codec?: string;         // 音频格式
  SampleRate?: number;    // 采样率
  EmotionCategory?: string; // 情感类别
}

interface TTSResponse {
  Audio: string;          // Base64 编码的音频
  SessionId: string;
  RequestId: string;
}

class TencentTTSClient {
  private secretId: string;
  private secretKey: string;
  private token: string;
  private region: string;
  private endpoint: string = 'tts.tencentcloudapi.com';
  private service: string = 'tts';

  constructor(config: TTSConfig) {
    this.secretId = config.secretId;
    this.secretKey = config.secretKey;
    this.token = config.token || '';
    this.region = config.region || 'ap-guangzhou';
  }

  /**
   * 生成腾讯云 API v3 签名
   * 参考：https://cloud.tencent.com/document/api/1073/37988
   */
  private sign(payload: string, timestamp: number): string {
    const date = new Date(timestamp * 1000).toISOString().split('T')[0];

    // 1. 构建规范请求串
    const httpRequestMethod = 'POST';
    const canonicalUri = '/';
    const canonicalQueryString = '';
    const canonicalHeaders = `content-type:application/json\nhost:${this.endpoint}\n`;
    const signedHeaders = 'content-type;host';
    const hashedRequestPayload = CryptoJS.SHA256(payload).toString();

    const canonicalRequest = [
      httpRequestMethod,
      canonicalUri,
      canonicalQueryString,
      canonicalHeaders,
      signedHeaders,
      hashedRequestPayload
    ].join('\n');

    // 2. 构建待签名字符串
    const algorithm = 'TC3-HMAC-SHA256';
    const hashedCanonicalRequest = CryptoJS.SHA256(canonicalRequest).toString();
    const credentialScope = `${date}/${this.service}/tc3_request`;
    const stringToSign = [
      algorithm,
      timestamp.toString(),
      credentialScope,
      hashedCanonicalRequest
    ].join('\n');

    // 3. 计算签名
    const kDate = CryptoJS.HmacSHA256(date, 'TC3' + this.secretKey);
    const kService = CryptoJS.HmacSHA256(this.service, kDate);
    const kSigning = CryptoJS.HmacSHA256('tc3_request', kService);
    const signature = CryptoJS.HmacSHA256(stringToSign, kSigning).toString();

    // 4. 构建 Authorization
    const authorization = [
      `${algorithm} Credential=${this.secretId}/${credentialScope}`,
      `SignedHeaders=${signedHeaders}`,
      `Signature=${signature}`
    ].join(', ');

    return authorization;
  }

  /**
   * 调用 TextToVoice API
   */
  async textToVoice(params: TTSParams): Promise<TTSResponse> {
    const timestamp = Math.floor(Date.now() / 1000);
    const payload = JSON.stringify(params);
    const authorization = this.sign(payload, timestamp);

    return new Promise((resolve, reject) => {
      const headers: any = {
        'Content-Type': 'application/json',
        'Authorization': authorization,
        'X-TC-Action': 'TextToVoice',
        'X-TC-Version': '2019-08-23',
        'X-TC-Timestamp': timestamp.toString(),
        'X-TC-Region': this.region
      };

      // 如果有临时密钥的 token，需要添加
      if (this.token) {
        headers['X-TC-Token'] = this.token;
      }

      wx.request({
        url: `https://${this.endpoint}`,
        method: 'POST',
        header: headers,
        data: params,
        success: (res: any) => {
          console.log('TTS API 响应:', res);
          
          if (res.statusCode === 200) {
            if (res.data.Response) {
              if (res.data.Response.Error) {
                reject(new Error(`TTS API 错误: ${res.data.Response.Error.Message}`));
              } else {
                resolve(res.data.Response as TTSResponse);
              }
            } else {
              reject(new Error('响应格式错误'));
            }
          } else {
            reject(new Error(`HTTP 错误: ${res.statusCode}`));
          }
        },
        fail: (err: any) => {
          console.error('TTS 请求失败:', err);
          reject(new Error(`网络请求失败: ${err.errMsg || '未知错误'}`));
        }
      });
    });
  }
}

export default TencentTTSClient;
