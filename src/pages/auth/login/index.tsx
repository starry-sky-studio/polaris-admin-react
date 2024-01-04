import { AuthAPI } from '@/api/auth'
import { Button } from 'antd'

export function Component() {
  const handleLogin = () => {
    AuthAPI.login({
      username: 'Upwards',
      password: '123456'
    }).then((res: any) => {
      console.log(res)
    })
  }
  return (
    <div>
      <Button onClick={handleLogin}></Button>
      <div className="bg-pink-200">登录div</div>
    </div>
  )
}
