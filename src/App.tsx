import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { Suspense } from 'react'
import { Loading } from './loading'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { ConfigProvider, theme } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <QueryClientProvider client={queryClient}>
          <ConfigProvider theme={{ cssVar: true, algorithm: theme.defaultAlgorithm }}>
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
