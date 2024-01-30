import { useAsyncEffect } from 'ahooks'

interface AuthGuardProps {
  /**
   * 是否跳过认证
   * @default false
   */
  skipAuth?: boolean
}

export const useAuthGuard = (props?: AuthGuardProps) => {
  const { skipAuth = false } = props ?? {}

  const navigate = useNavigate()
  const userStore = useUserStore()

  const [isLoading, setIsLoading] = useState(true)

  //useAsyncEffect专门用于处理异步操作
  useAsyncEffect(async () => {
    console.log(skipAuth, 'skipAuth1')
    // 如果已经登录，直接跳转到首页，否则清除用户信息
    if (!AuthUtils.isAuthenticated()) {
      console.log(skipAuth, 'skipAuth2')
      // 清除用户信息并跳转到登录页
      userStore.clearUser()
      if (!skipAuth) {
        navigate(`/login?redirect=${window.location.pathname}`, {
          replace: true
        })
      }
      console.log(skipAuth, 'skipAuth3')
      setIsLoading(false)
      return
    } else {
      // 将token 拿给后端做验证
      setIsLoading(false)
    }

    // 如果跳过认证，直接跳转到首页
    if (skipAuth) {
      navigate('/', { replace: true })
    }
  }, [])

  return { isLoading }
}
