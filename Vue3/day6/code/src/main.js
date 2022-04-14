import { createApp } from 'vue'
import './index.css'
import axios from 'axios'
// import App from './App.vue'
// import App from './components/01.watch/App.vue'
// import App from './components/02.life-cycle/App.vue'
// import App from './components/03.father-son/App.vue'
// import App from './components/04.brother/App.vue'
import App from './components/05.provide&inject/App.vue'
// import App from './components/06.network/App.vue'


const app = createApp(App)
axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.mount('#app')
