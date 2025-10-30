// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // 🌟 Adicione esta configuração
    host: true, 
    port: 5173, // Se não for o 5173, use a porta correta
  }
})