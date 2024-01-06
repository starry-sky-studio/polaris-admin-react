import { ProxyOptions, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_PORT, VITE_BASE_API_PREFIX, VITE_BASE_API_URL } = env
  const port = parseInt(VITE_PORT, 10) || 5173
  const proxy: Record<string, string | ProxyOptions> = {
    [VITE_BASE_API_PREFIX]: {
      target: VITE_BASE_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(VITE_BASE_API_PREFIX, '')
    }
    // '/socket.io': {
    //   target: VITE_BASE_API_URL,
    //   ws: true,
    //   changeOrigin: true
    // }
  }
  return {
    plugins: [
      react(),
      AutoImport({
        dts: '@types/auto-imports.d.ts',
        include: [/\.[tj]sx?$/, /\.md$/],
        imports: [
          'react',
          'react-router-dom',
          {
            from: '@tanstack/react-query',
            imports: ['useQueryClient', 'useQuery', 'useQueries', 'useMutation', 'keepPreviousData']
          },
          {
            from: 'clsx',
            imports: [['default', 'clsx']]
          },
          {
            from: 'use-immer',
            imports: ['useImmer']
          },
          {
            from: '@iconify/react',
            imports: ['Icon']
          },
          {
            from: '@/constants',
            imports: ['AppMetadata', 'GlobalEnvConfig']
          },
          {
            from: 'antd',
            imports: ['Button', 'Input', 'Layout', 'Card', 'message']
          },
          {
            from: 'zustand',
            imports: ['create']
          }
        ],
        dirs: [
          'src/api/**',
          'src/components/**',
          'src/hooks/**',
          'src/layouts/*/index.tsx',
          'src/providers/**',
          'src/store/**',
          'src/utils/**'
        ]
      }),
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        jsx: 'react'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    server: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    preview: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    }
  }
})
