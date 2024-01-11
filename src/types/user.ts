export interface TokenModel {
  refreshToken: string
  accessToken: string
}

export interface UserModel {
  id: number
  username: string
  nickName?: string
  email?: string
  phoneNumber?: string
  avatarUrl?: string
  gender?: string
  country?: string
  province?: string
  city?: string
  biography?: string
  website?: string
  birthDate?: Date
  enabled: boolean
}

export interface UserType extends TokenModel {
  user: UserModel
}
