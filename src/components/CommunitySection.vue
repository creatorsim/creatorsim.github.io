<template>
  <section id="community" class="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
      >
        Community
      </h2>
      <p
        class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Institutions that use CREATOR
      </p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <div
          v-for="[id, institution] of Object.entries(community)"
          :key="institution.name"
          class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:bg-gray-900 transition-all group text-center"
        >
          <img
            :src="`images/institutions/${id}.webp`"
            :alt="institution.name"
            class="h-25 mx-auto mb-3 group-hover:scale-110 transition-transform object-cover"
          />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {{ institution.name }}
          </h3>
          <div class="flex justify-center gap-3">
            <a
              v-if="institution.links?.website"
              :href="institution.links.website"
              target="_blank"
              rel="noopener"
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <i class="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import yaml from "js-yaml"

export default {
  name: "CommunitySection",
  data() {
    return {
      community: [],
    }
  },
  async mounted() {
    await this.loadCommunity()
  },
  methods: {
    async loadCommunity() {
      try {
        const response = await fetch("content/community.yml")
        const yamlText = await response.text()
        this.community = yaml.load(yamlText)
      } catch (error) {
        console.error("Error loading community:", error)
      }
    },
  },
}
</script>
