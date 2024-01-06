import { Outlet } from 'react-router-dom'
import imgUrl from '@/assets/favicon.ico'
export default function AuthLayout() {
  return (
    <main className="flex h-screen">
      <div className=" bg-indigo-100 dark:bg-gray-700 w-0  sm:w-1/2 h-full flex flex-col  justify-center items-center">
        <img
          width={48}
          src={imgUrl}
          alt=""
        />
        <div className="text-lg"> {AppMetadata.APP_NAME}</div>
      </div>
      <div className="bg-indigo-300 dark:bg-slate-500 w-full sm:w-1/2 h-full flex justify-center items-center ">
        <div className="w-56 bg-white dark:bg-[#37393e] h-fit p-2 rounded">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
