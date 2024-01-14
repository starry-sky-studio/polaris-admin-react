import { LoginType } from '@/enums'

interface Props {
  handleLoginType: (params: LoginType) => void
}

export default function Component(props: Props) {
  function handleJump() {
    props.handleLoginType(LoginType.EMAIL)
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
    </div>
  )
}
