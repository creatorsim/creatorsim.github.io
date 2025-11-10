<template>
  <section id="evolution" class="py-12 sm:py-16 bg-white dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Evolution</h2>
      <p class="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">Development journey across the years</p>
      <div class="space-y-6">
        <div v-for="(item, index) in evolutionData" 
             :key="index"
             class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div class="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 order-2 lg:order-none"
               :class="{ 'lg:order-2': index % 2 === 1 }">
            <div class="flex items-baseline gap-3 mb-3">
              <span class="text-xl font-bold text-blue-600 dark:text-blue-400">{{ item.info[0] }}</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ item.year }}</span>
            </div>
            <ul class="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
              <li v-for="(info, infoIndex) in item.info.slice(1)" 
                  :key="infoIndex"
                  class="flex gap-2">
                <span class="text-blue-500 dark:text-blue-400 flex-shrink-0">•</span>
                <span>{{ info }}</span>
              </li>
            </ul>
            <a v-if="item.url" 
               :href="item.url" 
               class="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm">
              Try version →
            </a>
          </div>
          
          <div class="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 order-1 lg:order-none"
               :class="{ 'lg:order-1': index % 2 === 1 }">
            <img :src="item.media_src" 
                 :alt="item.media_alt" 
                 loading="lazy"
                 class="w-full h-auto object-cover"
                 @error="hideImage">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import yaml from 'js-yaml'

export default {
  name: 'EvolutionSection',
  data() {
    return {
      evolutionData: []
    }
  },
  async mounted() {
    await this.loadEvolution()
  },
  methods: {
    async loadEvolution() {
      try {
        const response = await fetch('content/evolution.yml')
        const yamlText = await response.text()
        this.evolutionData = yaml.load(yamlText)
      } catch (error) {
        console.error('Error loading evolution data:', error)
      }
    },
    hideImage(event) {
      event.target.parentElement.style.display = 'none'
    }
  }
}
</script>
