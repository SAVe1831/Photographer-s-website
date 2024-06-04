import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeflex/primeflex.css'
import './assets/main.css'
import PrimeVue from 'primevue/config'
import ScrollTop from 'primevue/scrolltop'


const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.component('ScrollTop', ScrollTop);

app.mount('#app')
