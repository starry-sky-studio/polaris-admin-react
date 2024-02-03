import nprogress from 'nprogress'
import { useNavigation } from 'react-router-dom'

nprogress.configure({ showSpinner: false })

export default function Root() {
  const navigation = useNavigation()
  const location = useLocation()

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
    console.log(location, 'location')
    //   const { title } = getRouteMetadata(location.pathname, routes) ?? {}
    //   document.title = getDocumentTitle(typeof title === 'function' ? title() : title)
  }, [location.pathname])

  return (
    <div>
      <Outlet />
    </div>
  )
}
