import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Aura from '@primevue/themes/aura'
import Button from "primevue/button"

createApp(App).use(router).mount('#app').use(PrimeVue, {
    theme: {
        preset: Aura
    }
}).component('Button', Button)
