import { useSidebarStore } from '@/store/sidebar'
export default function CollapseButton() {
  const sidebarStore = useSidebarStore()

  const collapseWidth = useMemo(() => {
    if (sidebarStore.isDisplay && sidebarStore.isCollapse) {
      return 'w-[64px]'
    }
    return 'w-[224px]'
  }, [sidebarStore.isDisplay, sidebarStore.isCollapse])

  return (
    <div className={clsx('fixed bottom-0 left-0', collapseWidth)}>
      <div
        className="h-16 bg-slate-100  hover:bg-slate-200   dark:bg-[#36393F]  flex justify-center items-center transition-transform"
        onClick={() => sidebarStore.toggleCollapse()}
      >
        <Icon
          className="cursor-pointer text-[#000] dark:text-[#fff]"
          icon={
            sidebarStore.isCollapse ? 'ic:baseline-arrow-back-ios' : 'ic:baseline-arrow-forward-ios'
          }
          height={24}
        />
      </div>
    </div>
  )
}
