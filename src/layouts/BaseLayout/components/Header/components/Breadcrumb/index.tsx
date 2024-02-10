import { Breadcrumb } from 'antd'
const items = [
  {
    path: 'home',
    title: 'home'
  },
  {
    path: 'system',
    title: 'system',
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
  function itemRender(item: any, params: any, items: any, paths: any) {
    console.log(item, 'item')
    console.log(items, 'items')
    const last = items.indexOf(item) === items.length - 1
    //console.log(last, 'last')
    return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>
  }

  return (
    <Breadcrumb
      itemRender={itemRender}
      items={items}
    />
  )
}
