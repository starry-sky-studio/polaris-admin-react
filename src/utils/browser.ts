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

  /**
   * 禁止手势缩放
   * @description 该方法用于禁止移动端手势缩放，以提高更好的用户体验。适配 Web 手机端页面，在页面初始化的时候调用即可。
   * @example
   * ```ts
   * BrowserUtils.disableGestureScale()
   * ```
   */
  static disableGestureScale() {
    document.addEventListener(
      'gesturestart',
      (event) => {
        event.preventDefault()
      },
      false
    )
    let lastTouchEnd = 0
    document.documentElement.addEventListener(
      'touchend',
      (event) => {
        const now = Date.now()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      },
      false
    )
    document.addEventListener('gesturestart', (event) => {
      event.preventDefault()
    })
  }

  /**
   * 设置站点标题
   * @description
   * @returns 设置网页标题
   * @example
   * ```ts
   * const isMobile = BrowserUtils.isMobile()
   * ```
   */
  isMobile(): boolean {
    return window.matchMedia('only screen and (max-width: 640px)').matches
  }
  /**
   * 生成页面标题
   * @description
   * - 如果传参，结果为 `当前页面标题 | 应用名称`
   * - 默认为 `应用名称`
   */
  static setDocumentTitle(APP_NAME: string, title?: string) {
    const name = title ? `${title} | ${APP_NAME}` : APP_NAME
    document.title = name
  }
}
