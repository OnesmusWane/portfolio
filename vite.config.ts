import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true, // allows external access
    allowedHosts: ['fe1c113949e9.ngrok-free.app'] // allow your ngrok host
  }
})
