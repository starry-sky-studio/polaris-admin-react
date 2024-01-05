import { Content, Footer, Header, Sidebar, Tabs } from './components'

export default function DpBaseLayout() {
  return (
    // NOTE: 此处 rootClassName 不加 !flex-row 会导致加载布局闪屏
    <Layout rootClassName="!flex !flex-row">
      <Sidebar />
      <Layout className="h-screen !bg-white">
        <Header />
        <Tabs />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  )
}
