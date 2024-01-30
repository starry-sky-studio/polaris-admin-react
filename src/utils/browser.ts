export class BrowserUtils {
  static openNewWindow(url: string) {
    window.open(url, '_blank')
  }

  static copyText(text: string) {
    if (navigator.clipboard) {
      this.copyText = (text) => {
        navigator.clipboard.writeText(text)
      }
      this.copyText(text)
    } else {
      this.copyText = (text) => {
        const input = document.createElement('input')
        input.setAttribute('value', text)
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
      }
      this.copyText(text)
    }
  }

  /**
   * 下载文件
   * @param url 文件地址
   * @param fileName 下载后的文件名
   * @example
   * ```ts
   * BrowserUtils.downloadFile("FILE_URL", "FILE_NAME")
   * ```
   */
  static downloadFile(url: string, fileName: string) {
    const aElement = document.createElement('a')
    aElement.href = url
    aElement.setAttribute('download', fileName)
    aElement.click()
  }

  /**
   * 判定是否是移动端
   * @description 响应式请使用 useMediaQuery
   * @returns 是否是移动端
   * @example
   * ```ts
   * const isMobile = BrowserUtils.isMobile()
   * ```
   */
  static isMobile(): boolean {
    return window.matchMedia('only screen and (max-width: 640px)').matches
  }
}
