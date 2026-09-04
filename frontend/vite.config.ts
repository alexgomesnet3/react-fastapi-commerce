import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],

    define: {
      'import.meta.env.APP_NAME': JSON.stringify(env.APP_NAME),
    },
  }
})