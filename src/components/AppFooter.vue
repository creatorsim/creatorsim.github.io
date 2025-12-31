<template>
  <footer class="bg-gray-900 dark:bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-lg font-semibold mb-3">CREATOR</h3>
          <p class="text-sm text-gray-400 dark:text-gray-400 mb-4">
            Developed by ARCOS at Universidad Carlos III de Madrid
          </p>
          <div
            class="flex flex-wrap items-center justify-center gap-4 p-2 bg-white dark:bg-white rounded"
          >
            <img
              src="/images/arcos.webp"
              alt="ARCOS"
              class="h-9 w-auto"
            />
            <img
              src="/images/dptoinf.webp"
              alt="UC3M Department of Computer Science"
              class="h-12 w-auto"
            />
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-3">Links</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="https://www.arcos.inf.uc3m.es/"
                target="_blank"
                rel="noopener"
                class="text-gray-400 dark:text-gray-400 hover:text-white transition-colors"
              >
                ARCOS
              </a>
            </li>
            <li>
              <a
                href="https://www.uc3m.es/"
                target="_blank"
                rel="noopener"
                class="text-gray-400 dark:text-gray-400 hover:text-white transition-colors"
              >
                Universidad Carlos III de Madrid
              </a>
            </li>
            <li>
              <a
                href="https://github.com/creatorsim/creator"
                target="_blank"
                rel="noopener"
                class="text-gray-400 dark:text-gray-400 hover:text-white transition-colors"
              >
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-3">License</h4>
          <p class="text-sm text-gray-400 dark:text-gray-400">
            CREATOR is licensed under the
            <a
              href="https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html"
              target="_blank"
              rel="noopener"
              class="text-gray-400 dark:text-gray-400 hover:text-white transition-colors"
            >
              LGPL-2.1 license
            </a>
          </p>
        </div>
      </div>
      <div class="pt-8 border-t border-gray-800 dark:border-gray-900">
        <div class="mb-6">
          <p class="text-sm text-gray-400 dark:text-gray-400 mb-4 text-center">
            <i
              >Integrated development environment for teaching and research on
              RISC-V processors</i
            >
            (PDC2023-145832-I00) funded by MICIU/AEI/ 10.13039/501100011033 and
            by the European Union <i>NextGenerationEU/PRTR</i>
          </p>
          <div class="flex flex-wrap items-center justify-center gap-6 p-4">
            <img
              src="/images/gobspain.svg"
              alt="Ministerio de Ciencia e Innovación"
              class="h-16 w-auto max-w-xs"
            />
            <img
              src="/images/eunextgen.webp"
              alt="Funded by the European Union"
              class="h-16 w-auto max-w-xs"
            />
            <img
              src="/images/spainfunding.webp"
              alt="Plan de Recuperación, Transformación y Resiliencia"
              class="h-25 w-auto max-w-xs"
            />
            <img
              src="/images/logo_aei.webp"
              alt="Agencia Estatal de Investigación"
              class="h-25 w-auto max-w-xs"
            />
          </div>
        </div>
        <div class="text-center">
          <p class="text-sm text-gray-400 dark:text-gray-400">
            &copy; 2019-2025 ARCOS, UC3M
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
}
</script>
