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
        loader: () => '字典'
      },
      {
        path: '/system/users',
        lazy: () => import('@/pages/system/users'),
        loader: () => '用户'
      },
      {
        path: '/error-pages',
        lazy: () => import('@/pages/error-pages'),
        loader: () => '错误页面',

        children: [
          {
            path: '/error-pages/404',
            lazy: () => import('@/pages/error-pages/404'),
            loader: () => '资源未找到'
          },
          {
            path: '/error-pages/403',
            lazy: () => import('@/pages/error-pages/403'),
            loader: () => '禁止访问'
          },
          {
            path: '/error-pages/500',
            lazy: () => import('@/pages/error-pages/500'),
            loader: () => '服务器错误'
          }
        ]
      },
      {
        path: '/system-tools',
        lazy: () => import('@/pages/system-tools'),
        loader: () => '系统工具',
        children: [
          {
            path: '/system-tools/websocket',
            lazy: () => import('@/pages/system-tools/websocket'),
            loader: () => 'websocket'
          },
          {
            path: '/system-tools/excel',
            lazy: () => import('@/pages/system-tools/excel'),
            loader: () => 'excel'
          },
          {
            path: '/system-tools/qrcode',
            lazy: () => import('@/pages/system-tools/qrcode'),
            loader: () => '二维码'
          }
        ]
      },
      {
        path: '*',
        lazy: () => import('@/pages/error-pages/404'),
        loader: () => '资源未找到'
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    loader: () => '权限',
    //errorElement: <div>加载出错</div>,
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
