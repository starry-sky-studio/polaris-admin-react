import { Outlet } from 'react-router-dom'

export default function DpTableLayout() {
  return (
    <div className="relative h-[calc(100vh-154px)] overflow-y-scroll p-2 sm:p-4">
      auth
      <Outlet />
    </div>
  )
}
