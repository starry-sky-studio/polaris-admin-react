import { useLoaderData, useLocation } from 'react-router-dom'
import { Content, Footer, Header, Sidebar, Tabs } from './components'
import { useEffect } from 'react'

export default function DpBaseLayout() {
  const albums = useLoaderData() as string
  const location = useLocation()
  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    // NOTE: 此处 rootClassName 不加 !flex-row 会导致加载布局闪屏
    <div>
      <Sidebar />
      <Header />
      <Tabs />
      <Content />
      <Footer />
      {albums}
    </div>
  )
}
