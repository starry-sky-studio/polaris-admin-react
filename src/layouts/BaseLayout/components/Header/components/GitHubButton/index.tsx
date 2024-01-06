import { Tooltip } from 'antd'

export default function GitHubButton() {
  return (
    <Tooltip
      title="Github"
      placement="bottom"
    >
      <Icon
        height={28}
        icon="mdi:github"
        className="cursor-pointer text-[#666] dark:text-[#fff]"
        onClick={() => {
          BrowserUtils.openNewWindow(AppMetadata.REPO_GITHUB_URL)
        }}
      />
    </Tooltip>
  )
}
