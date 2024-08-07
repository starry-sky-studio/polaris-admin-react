import 'nprogress/nprogress.css'

import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { useThemeStore } from '@/store'

function App() {
  const themeStore = useThemeStore()
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2, retryDelay: 2000 } }
  })

  return (
    <>
      <Suspense fallback={<div>12134</div>}>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider
            theme={
              themeStore.isLightTheme() ? themeStore.lightThemeConfig : themeStore.darkThemeConfig
            }
          >
            <StyleProvider hashPriority="high">
              <HappyProvider>
                <RouterProvider router={router} />
              </HappyProvider>
            </StyleProvider>
          </ConfigProvider>
        </QueryClientProvider>
      </Suspense>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
