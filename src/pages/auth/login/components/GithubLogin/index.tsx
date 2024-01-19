import { LoginType } from '@/enums'

interface Props {
  handleLoginType: (params: LoginType) => void
}

export default function Component(props: Props) {
  function handleJump() {
    props.handleLoginType(LoginType.EMAIL)
    const url = GitHubAuthUtils.getAuthUrl()
    GitHubAuthUtils.openAuthWindow(url)

    //监听子窗口事件
    const messageEventListener = (e: MessageEvent) => {
      console.log(e.data, 'e')
      if (e.origin !== window.location.origin) {
        return
      }
      // 接收到数据移除监听器
      window.removeEventListener('message', messageEventListener)

      // 处理从新窗口传递过来的 GitHub 访问令牌
      const githubAuthCode = e.data
      console.log(githubAuthCode, 'githubAuthCode')
      AuthAPI.loginByGithub(githubAuthCode, LoginType.GITHUB).then((res: any) => {
        console.log(res, 'res')
      })
    }

    window.addEventListener('message', messageEventListener)
  }

  return (
    <div>
      <Icon
        icon="mdi:github"
        height={24}
        className="cursor-pointer"
        onClick={handleJump}
      />
    </div>
  )
}
