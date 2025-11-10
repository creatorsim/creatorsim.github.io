<template>
  <section id="publications" class="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Publications</h2>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Research and academic contributions</p>
      <div class="max-w-4xl mx-auto space-y-8">
        <ol v-if="publications.length > 0" class="relative border-s border-gray-200 dark:border-gray-700">
          <li v-for="(pub, index) in publications" :key="pub.id" class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -start-3 ring-8 ring-gray-50 dark:ring-gray-800">
              <i class="fas fa-file-text text-blue-800 dark:text-blue-300 text-xs"></i>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {{ pub.title }}
              <span v-if="index === 0" class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">Latest</span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {{ pub.year }} • {{ pub.type }} • {{ pub.publisher }}
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Authors: {{ pub.authors.join(', ') }}
            </p>
            <div class="flex gap-3 flex-wrap">
              <a v-if="pub.doi" 
                 :href="pub.doi" 
                 class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-700"
                 target="_blank" 
                 rel="noopener">
                <i class="fas fa-external-link-alt w-3.5 h-3.5 me-2.5"></i>
                View Publication
              </a>
              <button v-if="pub.cite" 
                      @click="toggleCite(pub.id)"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-700">
                <i class="fas fa-book w-3.5 h-3.5 me-2.5"></i>
                Cite
              </button>
            </div>
            <div v-if="pub.cite" 
                 v-show="showCite[pub.id]"
                 class="mt-3 relative group">
              <button @click="copyCitation(pub.cite, pub.id)"
                      class="copy-cite-btn absolute top-2 right-2 px-3 py-1.5 bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 text-white text-xs rounded-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 flex items-center gap-1.5"
                      :class="{ 'bg-green-600 hover:bg-green-600': copySuccess[pub.id] }"
                      title="Copy to clipboard">
                <i :class="copySuccess[pub.id] ? 'fas fa-check' : 'fas fa-copy'"></i>
                <span>{{ copySuccess[pub.id] ? 'Copied!' : 'Copy' }}</span>
              </button>
              <pre class="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs citation-code" tabindex="0"><code>{{ pub.cite }}</code></pre>
            </div>
          </li>
        </ol>
        <p v-else class="text-center text-gray-600 dark:text-gray-400">Loading publications...</p>
      </div>
    </div>
  </section>
</template>

<script>
import yaml from 'js-yaml'

export default {
  name: 'PublicationsSection',
  data() {
    return {
      publications: [],
      showCite: {},
      copySuccess: {}
    }
  },
  async mounted() {
    await this.loadPublications()
  },
  methods: {
    async loadPublications() {
      try {
        const response = await fetch('content/publications.yml')
        const yamlText = await response.text()
        const publicationsData = yaml.load(yamlText)
        
        this.publications = publicationsData.sort((a, b) => parseInt(b.year) - parseInt(a.year))
        
        // Initialize showCite object
        this.publications.forEach(pub => {
          this.showCite[pub.id] = false
          this.copySuccess[pub.id] = false
        })
      } catch (error) {
        console.error('Error loading publications:', error)
      }
    },
    toggleCite(pubId) {
      this.showCite[pubId] = !this.showCite[pubId]
    },
    async copyCitation(citeText, pubId) {
      try {
        await navigator.clipboard.writeText(citeText)
        this.copySuccess[pubId] = true
        
        setTimeout(() => {
          this.copySuccess[pubId] = false
        }, 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  }
}
</script>
