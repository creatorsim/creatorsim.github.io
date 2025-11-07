import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: './',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
    copyPublicDir: true,
  },
})