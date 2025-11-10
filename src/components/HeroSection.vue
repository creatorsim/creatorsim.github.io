<template>
  <section class="relative bg-blue-900 dark:bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-[calc(100vh-4rem)] flex items-center">
      <div class="w-full grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-8 lg:gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6 text-center lg:text-left">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            CREATOR
          </h2>
          <p class="text-base sm:text-lg text-blue-100 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            An educational integrated development environment for assembly programming, 
            developed by the ARCOS group at UC3M.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a href="https://jorgeramos.dev/creatorNG" 
               class="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-xl transition-all">
              Try CREATOR
            </a>
          </div>
        </div>
        
        <!-- Carousel -->
        <div class="relative">
          <button @click="prevSlide" 
                  class="carousel-nav absolute top-1/2 -translate-y-1/2 left-2 z-10 w-10 h-10 flex items-center justify-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 hover:scale-110 active:scale-95 transition-all" 
                  aria-label="Previous">
            <svg class="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <div class="overflow-hidden rounded-xl">
            <div class="carousel-track flex transition-transform duration-500 ease-out" 
                 :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(slide, index) in slides" 
                   :key="index" 
                   class="w-full flex-shrink-0">
                <div class="rounded-xl overflow-hidden shadow-2xl bg-white/10 dark:bg-gray-800/30">
                  <img :src="slide.src" 
                       :alt="slide.alt" 
                       :loading="index === 0 ? 'eager' : 'lazy'"
                       class="w-full h-auto block">
                </div>
                <h3 class="text-center text-lg font-semibold mt-4 text-white">{{ slide.title }}</h3>
              </div>
            </div>
          </div>
          
          <button @click="nextSlide" 
                  class="carousel-nav absolute top-1/2 -translate-y-1/2 right-2 z-10 w-10 h-10 flex items-center justify-center bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 hover:scale-110 active:scale-95 transition-all" 
                  aria-label="Next">
            <svg class="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          
          <div class="carousel-indicators flex justify-center gap-2 mt-4">
            <button v-for="(slide, index) in slides" 
                    :key="index"
                    @click="goToSlide(index)"
                    :class="[
                      'h-2 rounded-full transition-all',
                      index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                    ]"
                    :aria-label="`Go to slide ${index + 1}`">
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      currentSlide: 0,
      slides: [
        { src: 'images/promo/editor.png', alt: 'Assembly Code Editor', title: 'Assembly Code Editor' },
        { src: 'images/promo/architecture.png', alt: 'Architecture Visualization', title: 'Architecture Visualization' },
        { src: 'images/promo/registers.png', alt: 'Register Inspector', title: 'Register Inspector' },
        { src: 'images/promo/stack.png', alt: 'Stack View', title: 'Stack Visualization' },
        { src: 'images/promo/hexview.png', alt: 'Memory Hex Editor', title: 'Memory Hex Editor' },
        { src: 'images/promo/terminal.png', alt: 'Integrated Terminal', title: 'Integrated Terminal' },
        { src: 'images/promo/sentinel.png', alt: 'Sentinel', title: 'Sentinel' }
      ],
      touchStartX: 0
    }
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = (index + this.slides.length) % this.slides.length
    },
    prevSlide() {
      this.goToSlide(this.currentSlide - 1)
    },
    nextSlide() {
      this.goToSlide(this.currentSlide + 1)
    },
    handleKeydown(e) {
      if (e.key === 'ArrowLeft') this.prevSlide()
      if (e.key === 'ArrowRight') this.nextSlide()
    },
    handleTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX
    },
    handleTouchEnd(e) {
      const touchEndX = e.changedTouches[0].screenX
      const diff = this.touchStartX - touchEndX
      if (Math.abs(diff) > 50) {
        this.goToSlide(this.currentSlide + (diff > 0 ? 1 : -1))
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
    const track = this.$el.querySelector('.carousel-track')
    if (track) {
      track.addEventListener('touchstart', this.handleTouchStart, { passive: true })
      track.addEventListener('touchend', this.handleTouchEnd, { passive: true })
    }
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
    const track = this.$el.querySelector('.carousel-track')
    if (track) {
      track.removeEventListener('touchstart', this.handleTouchStart)
      track.removeEventListener('touchend', this.handleTouchEnd)
    }
  }
}
</script>
