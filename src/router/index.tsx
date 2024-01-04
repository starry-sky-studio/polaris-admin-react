import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import BaseLayout from '@/layouts/BaseLayout'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    loader: () => '<div>加载中</div>',
    children: [
      {
        path: '/system/dictionaries',
        lazy: () => import('@/pages/system/dictionaries'),
        loader: () => <div>dictionaries</div>
      },

      {
        path: 'team',
        lazy: () => import('@/pages/system/users'),
        loader: () => '<div>users</div>'
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    loader: () => '权限',
    errorElement: <div>加载出错</div>,
    children: [
      {
        path: '/login',
        lazy: () => import('@/pages/auth/login'),
        loader: () => '登录'
      },
      {
        path: '/signup',
        lazy: () => import('@/pages/auth/signup'),
        loader: () => '注册'
      }
    ]
  }
])
