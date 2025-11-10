<template>
  <section id="authors" class="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Authors</h2>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Meet the team behind CREATOR</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="author in authors" 
             :key="author.name"
             class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:bg-gray-900 transition-all group text-center">
          <img :src="author.image" 
               :alt="author.name" 
               class="w-20 h-20 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform object-cover">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ author.name }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-1">{{ author.affiliation }}</p>
          <div class="flex justify-center gap-3">
            <a v-if="author.links?.github" 
               :href="author.links.github" 
               target="_blank" 
               rel="noopener" 
               class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i class="fab fa-github"></i>
            </a>
            <a v-if="author.links?.researchgate" 
               :href="author.links.researchgate" 
               target="_blank" 
               rel="noopener" 
               class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i class="fab fa-researchgate"></i>
            </a>
            <a v-if="author.links?.linkedin" 
               :href="author.links.linkedin" 
               target="_blank" 
               rel="noopener" 
               class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i class="fab fa-linkedin"></i>
            </a>
            <a v-if="author.links?.website" 
               :href="author.links.website" 
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
  name: 'AuthorsSection',
  data() {
    return {
      authors: []
    }
  },
  async mounted() {
    await this.loadAuthors()
  },
  methods: {
    async loadAuthors() {
      try {
        const response = await fetch('content/authors.yml')
        const yamlText = await response.text()
        this.authors = yaml.load(yamlText)
      } catch (error) {
        console.error('Error loading authors:', error)
      }
    }
  }
}
</script>
