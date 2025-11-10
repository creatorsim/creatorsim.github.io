<template>
  <section id="contributors" class="py-16 sm:py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Contributors</h2>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Additional contributors to the CREATOR project</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        <div v-for="contributor in contributors" 
             :key="contributor.name"
             class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:bg-gray-800 transition-all group text-center">
          <div class="text-4xl mb-3 group-hover:scale-110 transition-transform">🧑‍💻</div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ contributor.name }}</h3>
          <div v-if="contributor.versions" class="mb-2">
            <span v-for="version in contributor.versions" 
                  :key="version"
                  class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-sm inline-block mr-1 mb-1">
              <i class="fas fa-tag mr-1"></i>v{{ version }}
            </span>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">{{ contributor.description }}</p>
          <div class="flex justify-center gap-3">
            <a v-if="contributor.links?.github" 
               :href="contributor.links.github" 
               target="_blank" 
               rel="noopener" 
               class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i class="fab fa-github"></i>
            </a>
            <a v-if="contributor.links?.researchgate" 
               :href="contributor.links.researchgate" 
               target="_blank" 
               rel="noopener" 
               class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i class="fab fa-researchgate"></i>
            </a>
            <a v-if="contributor.links?.linkedin" 
               :href="contributor.links.linkedin" 
               target="_blank" 
               rel="noopener" 
               class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i class="fab fa-linkedin"></i>
            </a>
            <a v-if="contributor.links?.website" 
               :href="contributor.links.website" 
               target="_blank" 
               rel="noopener" 
               class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i class="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import yaml from 'js-yaml'

export default {
  name: 'ContributorsSection',
  data() {
    return {
      contributors: []
    }
  },
  async mounted() {
    await this.loadContributors()
  },
  methods: {
    async loadContributors() {
      try {
        const response = await fetch('content/contributors.yml')
        const yamlText = await response.text()
        this.contributors = yaml.load(yamlText)
      } catch (error) {
        console.error('Error loading contributors:', error)
      }
    }
  }
}
</script>
