<template>
  <div id="app">
    <AppHeader @toggle-dark-mode="toggleDarkMode" :is-dark-mode="isDarkMode" />
    <HeroSection />
    <AboutSection />
    <PublicationsSection />
    <EvolutionSection />
    <AuthorsSection />
    <ContributorsSection />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PublicationsSection from './components/PublicationsSection.vue'
import EvolutionSection from './components/EvolutionSection.vue'
import AuthorsSection from './components/AuthorsSection.vue'
import ContributorsSection from './components/ContributorsSection.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    AboutSection,
    PublicationsSection,
    EvolutionSection,
    AuthorsSection,
    ContributorsSection,
    AppFooter
  },
  data() {
    return {
      isDarkMode: false,
      mediaQuery: null
    }
  },
  watch: {
    isDarkMode(newValue) {
      this.applyDarkMode()
    }
  },
  mounted() {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      this.isDarkMode = savedMode === 'true'
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    
    // Apply dark mode immediately on mount
    this.applyDarkMode()
    
    // Listen to system preference changes
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    this.mediaQuery.addEventListener('change', this.handleSystemThemeChange)
  },
  beforeUnmount() {
    // Clean up listener
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.handleSystemThemeChange)
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', this.isDarkMode.toString())
    },
    handleSystemThemeChange(e) {
      // Always apply system preference changes
      this.isDarkMode = e.matches
      localStorage.setItem('darkMode', this.isDarkMode.toString())
    },
    applyDarkMode() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>

<style>
@import '@fortawesome/fontawesome-free/css/all.min.css';
</style>
