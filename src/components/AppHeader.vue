<template>
  <header
    class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm"
  >
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <div class="flex-shrink-0">
        <h1
          class="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 leading-tight"
        >
          CREATOR
        </h1>
        <p
          class="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 leading-tight"
        >
          didaCtic and geneRic assEmbly progrAmming simulaTOR
        </p>
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center gap-3 lg:gap-6 text-sm">
        <li>
          <a
            href="#about"
            class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >About</a
          >
        </li>
        <li>
          <a
            href="#publications"
            class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >Publications</a
          >
        </li>
        <li>
          <a
            href="#evolution"
            class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >Evolution</a
          >
        </li>
        <li>
          <a
            href="#authors"
            class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >Authors</a
          >
        </li>
        <li>
          <a
            href="#contributors"
            class="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >Contributors</a
          >
        </li>
        <li>
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            <svg
              v-if="!isDarkMode"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </li>
        <li>
          <a
            href="https://github.com/creatorsim/creator"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            <i class="fab fa-github flex-shrink-0"></i>
            <span class="hidden sm:inline">GitHub</span>
          </a>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        :aria-expanded="isMobileMenuOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation -->
    <div
      v-show="isMobileMenuOpen"
      class="fixed inset-x-0 top-16 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg md:hidden"
    >
      <div
        class="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-4rem)] overflow-y-auto"
      >
        <a
          href="#about"
          @click="closeMobileMenu"
          class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
          >About</a
        >
        <a
          href="#publications"
          @click="closeMobileMenu"
          class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
          >Publications</a
        >
        <a
          href="#evolution"
          @click="closeMobileMenu"
          class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
          >Evolution</a
        >
        <a
          href="#authors"
          @click="closeMobileMenu"
          class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
          >Authors</a
        >
        <a
          href="#contributors"
          @click="closeMobileMenu"
          class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
          >Contributors</a
        >
        <button
          @click="toggleDarkMode"
          class="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
        >
          <svg
            v-if="!isDarkMode"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
        </button>
        <a
          href="https://github.com/creatorsim/creator"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
        >
          <i class="fab fa-github flex-shrink-0"></i>
          GitHub
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  mounted() {
    // Init smooth scroll
    this.initSmoothScroll()
  },
  methods: {
    toggleDarkMode() {
      this.$emit("toggle-dark-mode")
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          const href = this.getAttribute("href")
          if (href !== "#" && href.length > 1) {
            e.preventDefault()
            const target = document.querySelector(href)
            if (target) {
              const headerOffset = 64
              const elementPosition = target.getBoundingClientRect().top
              const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              })
            }
          }
        })
      })
    },
  },
}
</script>
