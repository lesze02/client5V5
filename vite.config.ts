import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// process.env.NODE_ENV === 'development' w dev server
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Client5V5/' : '/',
  plugins: [react()],
})