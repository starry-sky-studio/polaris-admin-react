import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import BaseLayout from '@/layouts/BaseLayout'
import { ReactElement, Suspense } from 'react'
import Root from '@/Root'

const loading = (comp: ReactElement) => {
  return <Suspense fallback={<div className="bg-rose-700">加载中</div>}>{comp}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        element: loading(<BaseLayout />),
        loader: () => '系统功能',
        id: '1',
        handle: () => (
          <Icon
            icon="ic:baseline-auto-awesome"
            height={18}
          />
        ),
        children: [
          {
            path: '/',
            lazy: () => import('@/pages'),
            loader: () => '首页',
            handle: () => (
              <Icon
                icon="ic:baseline-auto-awesome"
                height={18}
              />
            )
          },
          {
            path: '/system/dictionaries',
            lazy: () => import('@/pages/system/dictionaries'),
            loader: () => '字典',
            handle: () => (
              <Icon
                icon="ic:sharp-menu-book"
                height={18}
              />
            )
          },
          {
            path: '/system/users',
            lazy: () => import('@/pages/system/users'),
            loader: () => '用户',
            handle: () => (
              <Icon
                icon="ic:baseline-person"
                height={18}
              />
            )
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
              },
              {
                path: '/system-tools/multipart-upload',
                lazy: () => import('@/pages/system-tools/multipart-upload'),
                loader: () => '图片分片上传'
              },
              {
                path: '/system-tools/iframe',
                lazy: () => import('@/pages/system-tools/iframe'),
                loader: () => 'iframe'
              },
              {
                path: '/system-tools/picture-crop',
                lazy: () => import('@/pages/system-tools/picture-crop'),
                loader: () => '图片剪裁'
              }
            ]
          },
          {
            path: '/components',
            lazy: () => import('@/pages/components'),
            loader: () => '组件',
            children: [
              {
                path: '/components/virtual-list',
                lazy: () => import('@/pages/components/virtual-list'),
                loader: () => '虚拟列表'
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
      },
      {
        path: '/auth/redirect',
        lazy: () => import('@/pages/auth/AuthRedirect'),
        loader: () => '重定向页面'
      }
    ]
  }
])

export const getRouteMetadata = (path: string) => {
  console.log(path)
}
