import { Menu } from 'antd'
import imgUrl from '@/assets/favicon.ico'
import type { MenuProps } from 'antd'
import { useSidebarStore } from '@/store/sidebar'
import { CollapseButton } from './components'
import { useResponsive } from 'ahooks'
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem(
    '系统功能',
    '/system',
    <Icon
      icon="ic:baseline-auto-awesome"
      height={18}
    />,
    [
      getItem(
        '字典',
        '/system/dictionaries',
        <Icon
          icon="ic:sharp-menu-book"
          height={18}
        />
      ),
      getItem(
        '用户',
        '/system/users',
        <Icon
          icon="ic:baseline-person"
          height={18}
        />
      )
    ]
  ),
  getItem(
    '系统工具',
    'system-tools',
    <Icon
      icon="ic:baseline-auto-fix-high"
      height={18}
    />,
    [
      getItem(
        'websocket',
        'system-tools/websocket',
        <Icon
          icon="ic:round-swap-horizontal-circle"
          height={18}
        />
      ),
      getItem(
        '二维码',
        '/system-tools/qrcode',
        <Icon
          icon="ic:sharp-qr-code-2"
          height={18}
        />
      ),
      getItem(
        'Excel',
        '/system-tools/excel',
        <Icon
          icon="ic:outline-insert-chart-outlined"
          height={18}
        />
      ),
      getItem(
        '分片上传',
        '/system-tools/multipart-upload',
        <Icon
          icon="ic:outline-folder"
          height={18}
        />
      ),
      getItem(
        '图片剪裁',
        '/system-tools/picture-crop',
        <Icon
          icon="ic:baseline-crop"
          height={18}
        />
      )
    ]
  ),
  getItem(
    '组件',
    'components',
    <Icon
      icon="ic:baseline-donut-large"
      height={18}
    />,
    [
      getItem(
        '虚拟列表',
        '/components/virtual-list',
        <Icon
          icon="ic:twotone-playlist-add"
          height={18}
        />
      )
    ]
  ),

  getItem(
    '错误页面',
    'sub2',
    <Icon
      icon="ic:twotone-error-outline"
      height={18}
    />,
    [
      getItem(
        '资源未找到',
        '/error-pages/404',
        <Icon
          icon="tabler:error-404"
          height={18}
        />
      ),
      getItem(
        '禁止访问',
        '/error-pages/403',
        <Icon
          icon="ic:outline-block"
          height={18}
        />
      ),
      getItem(
        '服务器错误',
        '/error-pages/500',
        <Icon
          icon="ic:outline-blur-off"
          height={18}
        />
      )
    ]
  )
]

export default function Sidebar() {
  const navigator = useNavigate()
  const sidebarStore = useSidebarStore()
  const responsive = useResponsive()

  useEffect(() => {
    console.log(responsive.xs)
    if (responsive.xs) {
      sidebarStore.setIsCollapse(false)
      sidebarStore.setIsDisplay(false)
    }
  }, [responsive.xs])

  return (
    <Layout.Sider
      className={clsx(
        '!absolute inset-y-0 left-0 z-[100] h-screen overflow-auto border border-gray-300 shadow-sm dark:border-gray-950 sm:!static',
        !sidebarStore.isDisplay && 'border-r-0'
      )}
      collapsible
      collapsed={sidebarStore.isCollapse}
      onCollapse={(value) => sidebarStore.setIsCollapse(value)}
      width={sidebarStore.isDisplay ? 224 : 0}
      collapsedWidth={sidebarStore.isDisplay ? 64 : 0}
      trigger={null}
    >
      {Object.keys(responsive).map((key) => (
        <p key={key}>
          {key} {responsive[key] ? '✔' : '✘'}
        </p>
      ))}

      <div className="h-16 flex justify-center items-center gap-2">
        <img
          width={28}
          src={imgUrl}
          alt=""
        />
        {!sidebarStore.isCollapse && <span>{AppMetadata.APP_NAME}</span>}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
        className=""
        onSelect={({ key }) => navigator(key)}
      />

      <CollapseButton />
    </Layout.Sider>
  )
}
