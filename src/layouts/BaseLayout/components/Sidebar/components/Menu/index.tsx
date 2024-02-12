import type { MenuProps } from 'antd'
import { Menu } from 'antd'
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
  ),
  getItem(
    '多级菜单',
    '/multi-menu',
    <Icon
      icon="mdi:newspaper-variant-multiple-outline"
      height={18}
    />,
    [
      getItem(
        '1-1',
        '/multi-menu/1-1',
        <Icon
          icon="mdi:newspaper-variant-multiple-outline"
          height={18}
        />,
        [
          getItem(
            '1-1-1',
            '/multi-menu/1-1/1-1-1',
            <Icon
              icon="mdi:newspaper-variant-multiple-outline"
              height={18}
            />
          ),
          getItem(
            '1-1-2',
            '/multi-menu/1-1/1-1-2',
            <Icon
              icon="mdi:newspaper-variant-multiple-outline"
              height={18}
            />
          )
        ]
      )
    ]
  )
]

export default function PoMenu() {
  const navigator = useNavigate()
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['4']}
      items={items}
      onSelect={({ key }) => navigator(key)}
    />
  )
}
