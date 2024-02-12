import { Breadcrumb } from 'antd'
// import { useMatches } from 'react-router-dom'
// import type { BreadcrumbProps } from 'antd'

const items = [
  {
    path: '/',
    title: '系统功能',
    children: [
      {
        path: 'system/dictionaries',
        title: '字典'
      },
      {
        path: '/system/users',
        title: '用户'
      }
    ]
  },
  {
    path: '/system/dictionaries',
    title: '字典',
    children: [
      {
        path: 'system/dictionaries',
        title: 'General'
      },
      {
        path: 'system/users',
        title: 'Layout'
      },
      {
        path: '/navigation',
        title: 'Navigation'
      }
    ]
  },
  {
    path: 'second',
    title: 'second'
  }
]
export default function PoBreadcrumb() {
  //const matches = useMatches()
  // const location = useLocation()
  // function itemRender(item: any, params: any, items: any, paths: any) {
  //   console.log(item, 'item')
  //   console.log(items, 'items')
  //   console.log(location, 'location')
  //   // const last = items.indexOf(item) === items.length - 1
  //   // //console.log(last, 'last')
  //   return <span>123</span>
  // }

  // const [menus, setMenus] = useState<BreadcrumbProps[]>([])

  // useEffect(() => {
  //   console.log(matches, '111211')

  //   const newMap = matches.slice(2).map((item) => {
  //     return {
  //       path: item.pathname,
  //       title: item.data
  //     }
  //   })

  //   setMenus(newMap)
  // })

  return (
    <Breadcrumb
      //itemRender={itemRender}
      items={items}
    />
  )
}
