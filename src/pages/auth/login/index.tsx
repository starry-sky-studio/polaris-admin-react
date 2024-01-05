import { AuthAPI } from '@/api/auth'
import { Button } from 'antd'

export function Component() {
  const handleLogin = () => {
    console.log(111)
    AuthAPI.refresh('11111').then((res) => {
      console.log(res)
    })
  }
  return (
    <div>
      <Button onClick={handleLogin}>登录</Button>
      <div className="bg-pink-200">登录div</div>
    </div>
  )
}
