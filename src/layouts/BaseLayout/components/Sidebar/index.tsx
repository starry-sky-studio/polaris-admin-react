import imgUrl from '@/assets/favicon.ico'

import { useSidebarStore } from '@/store/sidebar'
import { CollapseButton, Mask, Menu } from './components'

export default function Sidebar() {
  const sidebarStore = useSidebarStore()

  return (
    <>
      <Mask />
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
        <div className="h-16 flex justify-center items-center gap-2">
          <img
            width={28}
            src={imgUrl}
            alt=""
          />
          {!sidebarStore.isCollapse && <span>{AppMetadata.APP_NAME}</span>}
        </div>
        <Menu />

        <CollapseButton />
      </Layout.Sider>
    </>
  )
}
