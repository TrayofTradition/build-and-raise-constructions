import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/build-and-raise-constructions/',
  plugins: [react()],
})
