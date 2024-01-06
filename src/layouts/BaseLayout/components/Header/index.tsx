import { GitHubButton, UserAvatar, ThemeToggle } from './components'

export default function Header() {
  return (
    <Layout.Header className="dark:border-b-black  h-16  flex justify-between items-center border-b border-slate-300 shadow">
      <div>213</div>
      <div className="flex justify-end items-center gap-2">
        <GitHubButton />
        <ThemeToggle />
        <UserAvatar />
      </div>
    </Layout.Header>
  )
}
