import { useSidebarStore } from '@/store/sidebar'
import { Tooltip } from 'antd'

export default function MenuVisibilityToggle() {
  const sidebarStore = useSidebarStore()
  return (
    <Tooltip
      title="侧边栏显示"
      placement="bottom"
    >
      <Icon
        className="cursor-pointer"
        icon={sidebarStore.isDisplay ? 'line-md:menu-fold-left' : 'line-md:menu-fold-right'}
        height={24}
        onClick={sidebarStore.toggleDisplay}
      />
    </Tooltip>
  )
}
