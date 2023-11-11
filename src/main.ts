import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './providers/router.provider'

// import configured router : 




createApp(App)
.use(router)
.mount('#app');
