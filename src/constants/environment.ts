/**
 * 全局环境变量
 */
export const GlobalEnvConfig = Object.freeze({
  PORT: import.meta.env.VITE_PORT ?? '',
  APP_BASE_URL: import.meta.env.VITE_APP_BASE_URL ?? '',
  BASE_API_PREFIX: import.meta.env.VITE_BASE_API_PREFIX ?? '',
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL ?? '',
  MODE: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
  GITHUB_ClIENT_ID: import.meta.env.VITE_GITHUB_ClIENT_ID ?? '',
  GITHUB_REDIRECT_URL: import.meta.env.VITE_GITHUB_REDIRECT_URL ?? ''
})
