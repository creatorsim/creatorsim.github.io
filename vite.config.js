import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => false
        }
      }
    }),
    tailwindcss(),
    vueDevTools(),
  ],
  // For organization sites (creatorsim.github.io), use root path
  // For project sites (forks), use /repo-name/ path
  base: process.env.GITHUB_REPOSITORY === 'creatorsim/creatorsim.github.io' 
    ? "/" 
    : (process.env.REPO ? "/" + process.env.REPO + "/" : "/"), // repository name (for github pages deployment)
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