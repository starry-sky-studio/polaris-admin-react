import { Content, Footer, Header, Sidebar, Tabs } from './components'
import Loading from '@/components/loading'
import { useSidebarStore } from '@/store/sidebar'
import { useNavigation } from 'react-router-dom'

export default function DpBaseLayout() {
  const { isLoading } = useAuthGuard()
  const navigation = useNavigation()
  const location = useLocation()

  // 监听路由变化，显示进度条
  useEffect(() => {
    // if (navigation.state === 'loading') {
    //   nprogress.start()
    // } else {
    //   nprogress.done()
    // }
    console.log(navigation)
  }, [navigation.state])

  // 监听路由变化，动态修改页面标题
  useEffect(() => {
    console.log(location.pathname)
    //   const { title } = getRouteMetadata(location.pathname, routes) ?? {}
    //   document.title = getDocumentTitle(typeof title === 'function' ? title() : title)
  }, [location.pathname])

  const sidebarStore = useSidebarStore()
  if (isLoading) {
    return <Loading />
  }
  // useEffect(() => {
  //   console.log('111')
  // })

  // let blocker = useBlocker(
  //   ({ currentLocation, nextLocation }) =>
  //     value !== "" &&
  //     currentLocation.pathname !== nextLocation.pathname
  // );

  return (
    // NOTE: 此处 rootClassName 不加 !flex-row 会导致加载布局闪屏
    <Layout rootClassName="!flex !flex-row">
      {sidebarStore.isDisplay && <Sidebar />}
      <Layout className="h-screen">
        <Header />
        <Tabs />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  )
}
