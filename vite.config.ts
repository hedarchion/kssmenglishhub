import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/kssmenglishhub/',  // ← ADD THIS LINE (use your repo name)
  build: {
    outDir: 'dist',
  },
})
