import { Menu, MenuProps } from 'antd'
const items: MenuProps['items'] = [1, 23, 45, 2].map((icon, index) => ({
  key: String(index + 1),
  icon: 'ic:baseline-person-2',
  label: `nav ${index + 1}`
}))
export default function Sidebar() {
  return (
    <Layout.Sider className="!bg-white border-r shadow overflow-auto h-screen w-screen fixed left-0 top-0 bottom-0">
      <Menu
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
        className=""
      />
    </Layout.Sider>
  )
}
