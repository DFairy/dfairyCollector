import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/index.scss'
import 'font-awesome/scss/font-awesome.scss' 

createApp(App).use(router).mount('#app')
