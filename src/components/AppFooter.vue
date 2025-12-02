<template>
  <footer class="bg-gray-900 dark:bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-lg font-semibold mb-3">CREATOR</h3>
          <p class="text-sm text-gray-400 dark:text-gray-400 mb-4">
            Developed by the ARCOS group at Universidad Carlos III de Madrid
          </p>
          <div
            class="flex items-center gap-4 p-2 bg-white dark:bg-white rounded"
          >
            <img
              src="/images/arcos.svg"
              alt="ARCOS Group"
              class="h-12 w-auto"
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
                ARCOS Group
              </a>
            </li>
            <li>
              <a
                href="https://www.uc3m.es/"
                target="_blank"
                rel="noopener"
                class="text-gray-400 dark:text-gray-400 hover:text-white transition-colors"
              >
                UC3M University
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
            Open-source software licensed under LGPL-3.0
          </p>
        </div>
      </div>
      <div
        class="pt-8 border-t border-gray-800 dark:border-gray-900 text-center"
      >
        <p class="text-sm text-gray-400 dark:text-gray-400">
          &copy; 2019-2025 ARCOS Group, UC3M
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
}
</script>
