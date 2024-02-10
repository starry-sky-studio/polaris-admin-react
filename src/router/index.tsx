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
        loader: () => 'BaseLayout',
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
            lazy: () => import('@/pages/system/home'),
            loader: () => '系统功能',
            handle: () => (
              <Icon
                icon="ic:baseline-auto-awesome"
                height={18}
              />
            ),
            children: [
              {
                path: '/',
                lazy: () => import('@/pages/system/home'),
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
              }
            ]
          },

          {
            path: '/error-pages',
            lazy: () => import('@/pages/error-pages'),
            loader: () => '错误页面',
            handle: () => (
              <Icon
                icon="ic:twotone-error-outline"
                height={18}
              />
            ),
            children: [
              {
                path: '/error-pages/404',
                lazy: () => import('@/pages/error-pages/404'),
                loader: () => '资源未找到',
                handle: () => (
                  <Icon
                    icon="tabler:error-404"
                    height={18}
                  />
                )
              },
              {
                path: '/error-pages/403',
                lazy: () => import('@/pages/error-pages/403'),
                loader: () => '禁止访问',
                handle: () => (
                  <Icon
                    icon="ic:outline-block"
                    height={18}
                  />
                )
              },
              {
                path: '/error-pages/500',
                lazy: () => import('@/pages/error-pages/500'),
                loader: () => '服务器错误',
                handle: () => (
                  <Icon
                    icon="ic:outline-blur-off"
                    height={18}
                  />
                )
              }
            ]
          },
          {
            path: '/system-tools',
            lazy: () => import('@/pages/system-tools'),
            loader: () => '系统工具',
            handle: () => (
              <Icon
                icon="ic:baseline-auto-fix-high"
                height={18}
              />
            ),
            children: [
              {
                path: '/system-tools/websocket',
                lazy: () => import('@/pages/system-tools/websocket'),
                loader: () => 'websocket',
                handle: () => (
                  <Icon
                    icon="ic:round-swap-horizontal-circle"
                    height={18}
                  />
                )
              },
              {
                path: '/system-tools/excel',
                lazy: () => import('@/pages/system-tools/excel'),
                loader: () => 'excel',
                handle: () => (
                  <Icon
                    icon="ic:outline-insert-chart-outlined"
                    height={18}
                  />
                )
              },
              {
                path: '/system-tools/qrcode',
                lazy: () => import('@/pages/system-tools/qrcode'),
                loader: () => '二维码',
                handle: () => (
                  <Icon
                    icon="ic:sharp-qr-code-2"
                    height={18}
                  />
                )
              },
              {
                path: '/system-tools/multipart-upload',
                lazy: () => import('@/pages/system-tools/multipart-upload'),
                loader: () => '图片分片上传',
                handle: () => (
                  <Icon
                    icon="ic:outline-folder"
                    height={18}
                  />
                )
              },

              {
                path: '/system-tools/picture-crop',
                lazy: () => import('@/pages/system-tools/picture-crop'),
                loader: () => '图片剪裁',
                handle: () => (
                  <Icon
                    icon="ic:baseline-crop"
                    height={18}
                  />
                )
              }
            ]
          },
          {
            path: '/components',
            lazy: () => import('@/pages/components'),
            loader: () => '组件',
            handle: () => (
              <Icon
                icon="ic:baseline-donut-large"
                height={18}
              />
            ),
            children: [
              {
                path: '/components/virtual-list',
                lazy: () => import('@/pages/components/virtual-list'),
                loader: () => '虚拟列表',
                handle: () => (
                  <Icon
                    icon="ic:twotone-playlist-add"
                    height={18}
                  />
                )
              }
            ]
          },
          {
            path: '/multi-level-menu',
            //lazy: () => import('@/pages/components'),
            loader: () => '多级菜单',
            handle: () => (
              <Icon
                icon="ic:baseline-donut-large"
                height={18}
              />
            ),
            children: [
              {
                path: '/multi-level-menu/1-1-1',
                lazy: () => import('@/pages/components/virtual-list'),
                loader: () => '1-1-1',
                handle: () => (
                  <Icon
                    icon="ic:twotone-playlist-add"
                    height={18}
                  />
                )
              },
              {
                path: '/multi-level-menu/1-1-2',
                lazy: () => import('@/pages/components/virtual-list'),
                loader: () => '1-1-2',
                handle: () => (
                  <Icon
                    icon="ic:twotone-playlist-add"
                    height={18}
                  />
                )
              }
            ]
          },
          {
            path: '*',
            lazy: () => import('@/pages/error-pages/404'),
            loader: () => '资源未找到',
            handle: () => {}
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
