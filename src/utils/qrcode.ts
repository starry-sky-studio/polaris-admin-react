import QRCode from 'qrcode'
import type { QRCodeErrorCorrectionLevel } from 'qrcode'

export interface QrcodeProps {
  width?: number
  margin?: number
  errorCorrectionLevel?: QRCodeErrorCorrectionLevel
  type?: 'image/jpeg'
  color?: {
    dark: string
    light: string
  }
}

export class QrcodeUtils {
  /**
   * 生成二维码
   * @param data 二维码数据内容，可以是字符串或者对象
   * @param QrcodeProps 二维码配置项
   */
  static async generateQrcode(data: string | object, qrcodeProps?: QrcodeProps): Promise<string> {
    let content: string
    if (data instanceof Object) {
      content = JSON.stringify(data)
    } else {
      content = data
    }
    return new Promise((resolve, reject) => {
      try {
        const path = QRCode.toDataURL(content, {
          ...qrcodeProps
        })
        resolve(path)
      } catch (err) {
        reject(new Error('生成二维码失败'))
      }
    })
  }

  static downloadQrcode() {}
}
