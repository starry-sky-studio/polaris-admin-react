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
  userRoles?: string[]
}

export interface UserType extends TokenModel {
  user: UserModel
}

export interface CreateUserDto {
  username: string
  password: string
}

export interface UpdateUserDto {
  username?: string

  nickName?: string

  email?: string

  phoneNumber?: string

  avatarUrl?: string

  gender?: string

  country?: string

  province?: string

  city?: string

  address?: string

  biography?: string

  website?: string

  birthDate?: Date

  enabled?: boolean
}

export interface PatchUserDto extends Omit<UpdateUserDto, 'username'> {
  username?: string
  password?: string
}
