import { create } from 'zustand'
import { ThemeUtils } from '@/utils'
import { lightTheme, darkTheme } from '@/constants'
import { ThemeModel } from '@/enums'
import { ThemeConfig } from 'antd'
import { subscribeWithSelector } from 'zustand/middleware'

interface State {
  theme: ThemeModel
  lightThemeConfig: ThemeConfig
  darkThemeConfig: ThemeConfig
}

interface Actions {
  isLightTheme: () => boolean
  isDarkTheme: () => boolean
  changeTheme: (theme: ThemeModel) => void
  toggleTheme: () => void
}

export const useThemeStore = create<State & Actions>()(
  subscribeWithSelector((set, get) => ({
    theme: ThemeUtils.getDefaultTheme(),
    lightThemeConfig: lightTheme,
    darkThemeConfig: darkTheme,

    isLightTheme: () => get().theme === ThemeModel.LIGHT,

    isDarkTheme: () => get().theme === ThemeModel.DARK,

    changeTheme: (theme: ThemeModel) => {
      ThemeUtils.setTheme(theme), set({ theme })
    },

    toggleTheme: () => {
      set(() => ({ theme: get().isLightTheme() ? ThemeModel.DARK : ThemeModel.LIGHT })),
        ThemeUtils.changeTheme(get().theme)
    }
  }))
)
useThemeStore.subscribe(
  (state: State) => state.theme,
  (theme: ThemeModel) => ThemeUtils.changeTheme(theme),
  {
    fireImmediately: true
  }
)
