export class AuthUtils {
  /**
   * assess-token 在本地存储的健名
   */
  private static ACCESS_TOKEN_KEY = 'access_token'

  /**
   * refresh-token 在本地存储的健名
   */
  private static REFRESH_TOKEN_KEY = 'refresh_token'

  private static REMEMBERED_ACCOUNT_KEY = 'remember_account'

  /**
   * 获取访问令牌
   * @description 获取 `localStorage` 中存储的访问令牌
   * @returns `localStorage` 中存储的访问令牌
   * @example
   * ```ts
   * AuthUtils.getAccessToken()
   * ```
   */
  static getAccessToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY) ?? ''
  }

  /**
   * 获取刷新令牌
   * @description 获取 `localStorage` 中存储的刷新令牌
   * @returns `localStorage` 中存储的刷新令牌
   * @example
   * ```ts
   * AuthUtils.getToken()
   * ```
   */
  static getRefreshToken(): string {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY) ?? ''
  }

  /**
   * 获取记住密码的账号密码
   * @description 获取 `localStorage` 中存储的账号密码
   * @returns `localStorage` 中存储的账号密码
   * @example
   * ```ts
   * AuthUtils.getRememberedAccount()
   * ```
   */
  static getRememberedAccount(): string {
    return localStorage.getItem(this.REMEMBERED_ACCOUNT_KEY) ?? ''
  }

  /**
   * 获取 authorization
   * @description 拼接访问令牌，格式如：`Bearer` + `accessToken`
   * @param prefix - 前缀，默认为 `Bearer`
   * @returns 访问令牌
   * @example
   * ```ts
   * AuthUtils.getAuthorization() // 默认是 Bearer 开头
   * AuthUtils.getAuthorization("Basic") // 自定义前缀
   * ```
   */
  static getAuthorization(prefix: string = 'Bearer') {
    return `${prefix} ${this.getAccessToken()}`
  }

  /**
   * 设置访问令牌
   * @description 设置 `localStorage` 中存储的访问令牌
   * @param token - 访问令牌
   * @example
   * ```ts
   * AuthUtils.setAccessToken("xxx")
   * ```
   */
  static setAccessToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token)
  }

  /**
   * 设置刷新令牌
   * @description 设置 `localStorage` 中存储的账号密码
   * @param data - 转为字符串的账号密码
   * @example
   * ```ts
   * AuthUtils.setRefreshToken("xxx")
   * ```
   */
  static setRefreshToken(token: string) {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token)
  }

  /**
   * 设置记住密码中的账户密码
   * @description 设置 `localStorage` 中存储密码中的账户密码
   * @example
   * ```ts
   * AuthUtils.setRememberedAccount("xxx")
   * ```
   */
  static setRememberedAccount(data: string) {
    localStorage.setItem(this.REMEMBERED_ACCOUNT_KEY, data)
  }

  /**
   * 清除 refreshToken
   * @description 清除 `localStorage` 中存储的刷新令牌
   * @example
   * ```ts
   * AuthUtils.clearRefreshToken()
   * ```
   */
  static clearRefreshToken() {
    localStorage.removeItem(this.REFRESH_TOKEN_KEY)
  }

  /**
   * 清除访问 token
   * @description 清除 `localStorage` 中存储的访问令牌
   * @example
   * ```ts
   * AuthUtils.clearAccessToken()
   * ```
   */
  static clearAccessToken() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY)
  }

  /**
   * 清除记住的账户密码
   * @description 清除 `localStorage` 中存储的账户密码
   * @example
   * ```ts
   * AuthUtils.clearRememberedAccount()
   * ```
   */
  static clearRememberedAccount() {
    localStorage.removeItem(this.REMEMBERED_ACCOUNT_KEY)
  }

  /**
   * 判断当前是否已经登录
   * @description 根据是否存在访问令牌，判断当前是否处于登录状态
   * @returns 是否已经登录
   * @example
   * ```ts
   * AuthUtils.isAuthenticated()
   * ```
   */
  static isAuthenticated(): boolean {
    return !!localStorage.getItem(this.ACCESS_TOKEN_KEY)
  }
}
