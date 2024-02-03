import {
  GitHubButton,
  MenuVisibilityToggle,
  UserAvatar,
  ThemeToggle,
  PoBreadcrumb
} from './components'

export default function Header() {
  return (
    <Layout.Header className="dark:border-b-black  h-16 !px-2  flex justify-between items-center border-b border-slate-300  shadow">
      <div className="flex gap-2">
        <MenuVisibilityToggle />
        <PoBreadcrumb />
      </div>
      <div className="flex justify-end items-center gap-2">
        <GitHubButton />
        <ThemeToggle />
        <UserAvatar />
      </div>
    </Layout.Header>
  )
}
