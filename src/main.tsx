import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import '@/assets/styles/main.scss'
import Loading from '@/components/loading'

BrowserUtils.disableGestureScale()

const LazyAaa = React.lazy(() => import('./App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="h-screen w-screen flex justify-center items-center">
          <Loading />
        </div>
      }
    >
      <LazyAaa />
    </Suspense>
  </React.StrictMode>
)
