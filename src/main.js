import { createApp } from 'vue'
import App from './App.vue'
import '../css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

console.log('Vue app starting...')
console.log('Development mode:', import.meta.env.DEV)
console.log('Vue version:', createApp.version || 'unknown')

const app = createApp(App)

app.mount('#app')

// Log for DevTools detection
console.log('Vue app mounted. Check for Vue DevTools detection.')
