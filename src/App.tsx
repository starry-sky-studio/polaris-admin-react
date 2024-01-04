import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { Suspense } from 'react'
import { Loading } from './loading'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Suspense>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
