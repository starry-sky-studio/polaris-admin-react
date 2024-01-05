import { Outlet } from 'react-router-dom'

export default function Content() {
  return (
    <Layout.Content className="overflow-auto  min-h-[calc(100vh-176px)] ">
      <Outlet />
    </Layout.Content>
  )
}
