// import './style.css'
import './assets/main.css'
import 'sellsuki-components'
import 'sellsuki-components/style.css'
import VueApexCharts from "vue3-apexcharts";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts);
app.mount('#app')

// createApp(App).mount('#app')
