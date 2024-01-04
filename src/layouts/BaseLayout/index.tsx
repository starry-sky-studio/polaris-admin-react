import { Content, Footer, Header, Sidebar, Tabs } from './components'

export default function DpBaseLayout() {
  return (
    // NOTE: 此处 rootClassName 不加 !flex-row 会导致加载布局闪屏
    <div>
      <Sidebar />
      <Header />
      <Tabs />
      <Content />
      <Footer />
    </div>
  )
}
