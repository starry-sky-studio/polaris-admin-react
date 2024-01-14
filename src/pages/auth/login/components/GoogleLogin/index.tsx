import { LoginType } from '@/enums'

interface Props {
  handleLoginType: (params: LoginType) => void
}
export default function Component(props: Props) {
  return (
    <Icon
      icon="basil:google-alt-solid"
      height={26}
      className="cursor-pointer"
      onClick={() => props.handleLoginType(LoginType.EMAIL)}
    />
  )
}
