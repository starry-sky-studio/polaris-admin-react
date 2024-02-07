import nprogress from 'nprogress'
import { useNavigation } from 'react-router-dom'
import { useMatches } from 'react-router-dom'

//配置
nprogress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

export default function Root() {
  const navigation = useNavigation()
  const location = useLocation()
  const matches = useMatches()
  const { APP_NAME } = AppMetadata
  // 监听路由变化，显示进度条
  useEffect(() => {
    if (navigation.state === 'loading') {
      nprogress.start()
    } else {
      nprogress.done()
    }
  }, [navigation.state])

  // 监听路由变化，动态修改页面标题
  useEffect(() => {
    const name = matches.pop()?.data as string
    BrowserUtils.setDocumentTitle(APP_NAME, name)
  }, [location.pathname])

  return <Outlet />
}
