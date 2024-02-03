import { Tag } from 'antd'
import type { TabsModel } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useTabsStore } from '@/store'
interface Props extends TabsModel {}

export default function TabsItem({ icon, label, href }: Props) {
  const navigate = useNavigate()
  const tabsStore = useTabsStore()
  const location = useLocation()

  const isCurrentTab = useMemo(
    () => (location.pathname === href ? true : false),
    [location.pathname]
  )

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation() // 阻止事件冒泡
    const index = tabsStore.tabs.findIndex((tab) => tab.href === href)
    if (isCurrentTab) {
      //第一个
      if (index === 0) {
        navigate(tabsStore.tabs[tabsStore.tabs.length - 1].href)
      }
      //不是第一个
      navigate(tabsStore.tabs[index - 1].href)
    }
    if (index !== -1 && index >= 1) {
      tabsStore.removeTab(index)
    }
  }

  return (
    <Tag
      color={isCurrentTab ? 'purple' : ''}
      onClick={() => navigate(href)}
      className="!flex justify-between items-center !py-1 gap-2 cursor-pointer"
    >
      {typeof icon === 'function' ? icon() : ''}
      {label}
      <Icon
        onClick={handleClose}
        height={16}
        icon="ic:baseline-close"
        className="cursor-pointer rounded-full text-[#666] dark:text-[#fff] hover:dark:bg-slate-600 hover:bg-slate-300"
      />
    </Tag>
  )
}
