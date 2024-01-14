import type { UserType, SignupModel, TokenModel, LoginBaseModel } from '@/types'
import { httpRequest } from './axios'
import { LoginType } from '@/enums'

export class AuthAPI {
  private static AUTH_API_PREFIX = `/auth`

  static REFRESH_API_URL = `${this.AUTH_API_PREFIX}/refresh`

  /**
   * 用户名登录
   */
  static login(data: LoginBaseModel, type: LoginType) {
    return httpRequest.post<UserType>(
      `${this.AUTH_API_PREFIX}/login`,
      { ...data },
      { params: { type } }
    )
  }

  /**
   * Github登录
   */
  static loginByGithub(code: string, type: LoginType) {
    return httpRequest.get<UserType>(`${this.AUTH_API_PREFIX}/github?code=${code}&type=${type}`)
  }

  /**
   * 注册
   */
  static signup(data: SignupModel) {
    return httpRequest.post<string>(`${this.AUTH_API_PREFIX}/signup`, { ...data })
  }

  /**
   * 刷新令牌
   */
  static async refresh(token: string) {
    return httpRequest.post<TokenModel>(this.REFRESH_API_URL, {}, { params: { token } })
  }
}
