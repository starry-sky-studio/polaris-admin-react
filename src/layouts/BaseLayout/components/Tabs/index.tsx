import { TabsItem } from './components'
import { useTabsStore } from '@/store'
export default function Tabs() {
  const tabsStore = useTabsStore()
  return (
    <Layout.Header className=" flex !h-12 w-full items-center justify-start border-b border-gray-300 dark:border-b-black !px-2 !py-1 dark:border-gray-950 sm:!px-4 gap-2">
      {tabsStore.tabs.map((item) => {
        return (
          <TabsItem
            {...item}
            key={item.href}
          />
        )
      })}
    </Layout.Header>
  )
}
