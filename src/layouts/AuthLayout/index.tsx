import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div>
      auth
      <Outlet />
    </div>
  )
}
