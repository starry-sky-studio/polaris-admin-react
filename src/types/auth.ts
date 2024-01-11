export interface LoginBaseModel {
  username: string
  password: string
}

export interface RememberModel extends LoginBaseModel {
  remember: boolean
}

export interface SignupModel extends LoginBaseModel {}
