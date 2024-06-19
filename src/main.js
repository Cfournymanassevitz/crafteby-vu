import './assets/main.css'
import axios from 'axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'
import '@radix-ui/themes/styles.css';

// axios.get('/sanctum/csrf-cookie').then(response => {
//   // Vous pouvez maintenant faire des requêtes nécessitant une protection CSRF
// });
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
