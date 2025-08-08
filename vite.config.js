import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://team04.wi1cm.uni-trier.de/public/',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
