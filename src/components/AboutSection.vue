<template>
  <section id="about" class="py-16 sm:py-20 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        About CREATOR
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        <div
          v-for="feature in features"
          :key="feature.title"
          class="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:bg-gray-800 transition-all group"
        >
          <div class="text-4xl mb-3 group-hover:scale-110 transition-transform">
            {{ feature.icon }}
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      features: [
        {
          icon: "📚",
          title: "Educational Focus",
          description:
            "Designed specifically for teaching assembly programming concepts in an intuitive way.",
        },
        {
          icon: "⚙️",
          title: "Generic Support",
          description:
            "User-defined architectures. Built-in support for RISC-V, MIPS, and Z80.",
        },
        {
          icon: "🌐",
          title: "Web-Based",
          description:
            "Run directly in your browser. No installation required. Works on any platform.",
        },
        {
          icon: "🔧",
          title: "Hardware Integration",
          description:
            "Integration with ESP32 microcontrollers and RISC-V SBCs.",
        },
      ],
    }
  },
}
</script>
