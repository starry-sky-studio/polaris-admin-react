import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className="flex h-screen">
      <div className="w-0 sm:w-1/2 h-full flex justify-center items-center">auth</div>
      <div className="w-full sm:w-1/2 h-full flex justify-center items-center bg-gray-100">
        <div className="w-56 bg-white h-fit p-2 rounded">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
