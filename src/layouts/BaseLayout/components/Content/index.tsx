import { Outlet } from 'react-router-dom'

export default function Content() {
  return (
    <Layout.Content className="overflow-auto  min-h-[calc(100vh-176px)] p-2">
      <Card className="h-full">
        <Outlet />
      </Card>
    </Layout.Content>
  )
}
