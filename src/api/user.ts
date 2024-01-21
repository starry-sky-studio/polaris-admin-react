import { CreateUserDto, PatchUserDto, UpdateUserDto, UserModel } from '@/types'

export class UserAPI {
  private static USER_API_PREFIX = `/user`

  /**
   * 得到用户信息 [id]
   */
  static getUser(id: number) {
    return httpRequest.post<UserModel>(`${this.USER_API_PREFIX}/${id}`)
  }

  /**
   * 创建用户信息 [id]
   */
  static addUser(createUser: CreateUserDto) {
    return httpRequest.post<UserModel>(`${this.USER_API_PREFIX}`, {
      ...createUser
    })
  }

  /**
   * 删除用户信息 [id]
   */
  static deleteUser(id: number) {
    return httpRequest.delete<string>(`${this.USER_API_PREFIX}/${id}`)
  }

  /**
   * 得到用户信息列表
   */
  static getUserLists(id: number) {
    return httpRequest.post<UserModel>(`${this.USER_API_PREFIX}/${id}`)
  }

  /**
   * 修改用户信息
   */
  static patchLists(id: number, patchUser: PatchUserDto) {
    return httpRequest.patch<UserModel>(`${this.USER_API_PREFIX}/${id}`, {
      ...patchUser
    })
  }

  /**
   * 更新用户信息
   */
  static updateUser(id: number, updateUserDto: UpdateUserDto) {
    return httpRequest.put<UserModel>(`${this.USER_API_PREFIX}/${id}`, {
      ...updateUserDto
    })
  }
}
