import { Content, Footer, Header, Sidebar, Tabs } from './components'
import Loading from '@/components/loading'
import { useSidebarStore } from '@/store/sidebar'

export default function DpBaseLayout() {
  const { isLoading } = useAuthGuard()
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
