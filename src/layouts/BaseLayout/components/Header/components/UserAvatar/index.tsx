import { Dropdown, MenuProps } from 'antd'

enum UserAction {
  'USER.INFO' = '1',
  'CHANGE.PASSWORD' = '2',
  'QUIT' = '3'
}

export default function UserAvatar() {
  const navigate = useNavigate()

  const items: MenuProps['items'] = [
    {
      key: UserAction['USER.INFO'],
      label: <span onClick={() => navigate('/user-info')}>用户信息</span>
    },
    {
      key: UserAction['CHANGE.PASSWORD'],
      label: <span onClick={() => navigate('/change-password')}>修改密码</span>
    },
    {
      key: UserAction.QUIT,
      label: <span onClick={logout}>退出登录</span>
    }
  ]

  function logout() {
    AuthUtils.clearAccessToken()
    AuthUtils.clearRefreshToken()
    navigate('/login', { replace: true })
  }

  // if (!userStore.hasData()) {
  //   return null
  // }

  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
    >
      <Icon
        height={28}
        icon="mdi:account-circle"
        className="cursor-pointer text-[#666] dark:text-[#fff]"
      />
    </Dropdown>
  )
}
