import type { UserType } from '@/types'
import { useUserStore } from '@/store'
export const useHandleLoginResult = () => {
  const userStore = useUserStore()
  const handleLoginResult = (userType: UserType, msg: string) => {
    //userType为null或undefined，则将解构赋值的目标对象设为一个空对象。
    const { accessToken, refreshToken, user } = userType ?? {}
    AuthUtils.setAccessToken(accessToken)
    AuthUtils.setRefreshToken(refreshToken)
    userStore.setUser(user)
    // 提示登录成功
    message.success(msg)
  }
  return { handleLoginResult }
}
