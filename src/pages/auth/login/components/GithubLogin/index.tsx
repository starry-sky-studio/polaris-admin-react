import { LoginType } from '@/enums'

interface Props {
  handleLoginType: (params: LoginType) => void
}

export default function Component(props: Props) {
  function handleJump() {
    props.handleLoginType(LoginType.EMAIL)
    const url = GitHubAuthUtils.getAuthUrl()
    GitHubAuthUtils.openAuthWindow(url)
    // window.open(
    //   'https://github.com/login/oauth/authorize',
    //   '_blank',
    //   'width=700, height=500, left=200'
    // )
  }

  return (
    <div>
      <Icon
        icon="mdi:github"
        height={24}
        className="cursor-pointer"
        onClick={handleJump}
      />

      <a href="https://github.com/login/oauth/authorize?client_id=c400d2b7375e790251a9&redirect_uri=http://localhost:3000/auth/github">
        点击
      </a>
      <a href="https://github.com/login/oauth/authorize?client_id=c400d2b7375e790251a9&redirect_uri=http://localhost:5173/auth/redirect">
        点击2
      </a>
    </div>
  )
}
