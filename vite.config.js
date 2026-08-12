import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // 👈 Links jsdom to your testing suite
    setupFiles: './vitest.setup.js', // 👈 Points to your setup file
  },
})
