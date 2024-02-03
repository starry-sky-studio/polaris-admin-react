import type { TabsModel } from '@/types'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface State {
  tabs: TabsModel[]
}

interface Actions {
  addTab: (tab: TabsModel) => void
  removeTab: (index: number) => void
  removeTabByHref: (href: string) => void
  clearAll: () => void
}

export const useTabsStore = create<State & Actions>()(
  immer((set, get) => ({
    tabs: [],
    addTab: (tab: TabsModel) => {
      const exist = get().tabs.some((tabsItem) => tabsItem.href === tab.href)
      console.log(tab, 'tabs')
      console.log(exist, 'exist')
      if (!exist) {
        set((state) => {
          state.tabs.push(tab)
        })
      }
    },
    removeTab: (index: number) => {
      set((state) => {
        state.tabs.splice(index, 1)
      })
    },
    removeTabByHref: (href: string) => {
      const index = get().tabs.findIndex((tab) => tab.href === href)
      if (index !== -1) {
        get().removeTab(index)
      }
    },
    clearAll: () => {
      set((state) => {
        state.tabs = []
      })
    }
  }))
)
