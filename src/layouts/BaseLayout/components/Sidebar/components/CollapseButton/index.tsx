import { useSidebarStore } from '@/store/sidebar'
export default function CollapseButton() {
  const sidebarStore = useSidebarStore()
  return (
    <div className="h-16 bg-white dark:#36393F flex justify-center items-center">
      <Icon
        className="cursor-pointer"
        icon={
          sidebarStore.isCollapse ? 'ic:baseline-arrow-back-ios' : 'ic:baseline-arrow-forward-ios'
        }
        height={24}
        onClick={sidebarStore.isCollapse}
      />
    </div>
  )
}
