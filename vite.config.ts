import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import vueDevTools from "vite-plugin-vue-devtools";

function isGithubUserOrOrganizationSite(repository: string): boolean {
  const [user, repo] = repository.split("/");

  return user === repo.replace(/.github.io$/, "");
}

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: _tag => false,
        },
      },
    }),
    tailwindcss(),
    vueDevTools(),
  ],
  // For organization sites (creatorsim.github.io), use root path
  // For project sites (forks), use /repo-name/ path
  base:
    !process.env.REPO ||
    isGithubUserOrOrganizationSite(process.env.GITHUB_REPOSITORY!)
      ? "/"
      : process.env.REPO + "/",
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
    copyPublicDir: true,
  },
});
