import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/', // use base only in production (GitHub Pages)
  plugins: [react()],
  server: {
    host: true, // allows external access
    allowedHosts: ['fe1c113949e9.ngrok-free.app'], // allow your ngrok host
  },
}))
