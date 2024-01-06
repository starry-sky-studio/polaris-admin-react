import { Menu, MenuProps } from 'antd'
import imgUrl from '@/assets/favicon.ico'
const items: MenuProps['items'] = [1, 23, 45, 2].map((icon, index) => ({
  key: String(index + 1),
  icon: 'ic:baseline-person-2',
  label: `nav ${index + 1}`
}))
export default function Sidebar() {
  return (
    <Layout.Sider className=" border-r dark:border-r-black shadow overflow-auto h-screen w-screen fixed left-0 top-0 bottom-0">
      <div className="h-16 flex justify-center items-center gap-2">
        <img
          width={28}
          src={imgUrl}
          alt=""
        />
        <span>{AppMetadata.APP_NAME}</span>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
        className=""
      />
    </Layout.Sider>
  )
}
