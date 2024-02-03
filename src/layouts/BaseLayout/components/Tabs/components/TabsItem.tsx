import { Tag } from 'antd'
import type { TabsModel } from '@/types'
import { useNavigate } from 'react-router-dom'
import { useTabsStore } from '@/store'
interface Props extends TabsModel {}

export default function TabsItem({ icon, label, href }: Props) {
  const navigate = useNavigate()
  const tabsStore = useTabsStore()

  return (
    <Tag
      onClick={() => navigate(href)}
      className="!flex justify-between items-center !py-1 gap-2 cursor-pointer"
    >
      {typeof icon === 'function' ? icon() : ''}
      {label}
      <Icon
        onClick={() => tabsStore.removeTabByHref(href)}
        height={16}
        icon="ic:baseline-close"
        className="cursor-pointer rounded-full text-[#666] dark:text-[#fff] hover:dark:bg-slate-600 hover:bg-slate-300"
      />
    </Tag>
  )
}
