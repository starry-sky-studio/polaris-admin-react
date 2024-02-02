import { TabsItem } from './components'

export default function Tabs() {
  return (
    <Layout.Header className=" flex !h-12 w-full items-center justify-start border-b border-gray-300 dark:border-b-black !px-2 !py-1 dark:border-gray-950 sm:!px-4 gap-2">
      <TabsItem />
      <TabsItem />
      <TabsItem />
    </Layout.Header>
  )
}
