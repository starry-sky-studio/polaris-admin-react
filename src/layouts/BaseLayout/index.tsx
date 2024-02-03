import { Content, Footer, Header, Sidebar, Tabs } from './components'
import Loading from '@/components/loading'
import { useSidebarStore } from '@/store/sidebar'
import { useMatches } from 'react-router-dom'
import { useTabsStore } from '@/store'
export default function DpBaseLayout() {
  const { isLoading } = useAuthGuard()

  const location = useLocation()
  const matches = useMatches()
  const tabsStore = useTabsStore()

  useEffect(() => {
    const length = matches.length - 1
    const tabs = matches[length]
    console.log(tabs?.pathname as string)
    tabsStore.addTab({
      href: tabs?.pathname as string,
      label: tabs?.data as string,
      icon: tabs?.handle
    })
  }, [location.pathname])

  const sidebarStore = useSidebarStore()
  if (isLoading) {
    return <Loading />
  }

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
