import { GitHubButton, MenuVisibilityToggle, UserAvatar, ThemeToggle } from './components'

export default function Header() {
  return (
    <Layout.Header className="dark:border-b-black  h-16 px-2  flex justify-between items-center border-b border-slate-300  shadow">
      <div>
        <MenuVisibilityToggle />
      </div>
      <div className="flex justify-end items-center gap-2">
        <GitHubButton />
        <ThemeToggle />
        <UserAvatar />
      </div>
    </Layout.Header>
  )
}
