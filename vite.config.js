import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 1000,
    proxy: {
      '/api': {
        target: 'https://pokelite-backend.onrender.com',
        changeOrigin: true
      }
    }
  }
})