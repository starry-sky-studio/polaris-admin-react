import { Tooltip } from 'antd'
import { useThemeStore } from '@/store'
export default function ThemeToggle() {
  const themeStore = useThemeStore()

  return (
    <Tooltip
      title="切换主题"
      placement="bottom"
    >
      <Icon
        icon={
          themeStore.isLightTheme()
            ? 'line-md:sunny-outline-loop'
            : 'line-md:sunny-outline-to-moon-alt-loop-transition'
        }
        type={themeStore.isLightTheme() ? 'Sun' : 'Moon'}
        className="cursor-pointer text-base"
        color={themeStore.isLightTheme() ? '#FDC022' : '#FED736'}
        onClick={() => themeStore.toggleTheme()}
        height={28}
      />
    </Tooltip>
  )
}
