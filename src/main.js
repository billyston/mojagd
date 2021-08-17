import { createApp } from 'vue'
import App from './App.vue'

import '../public/assets/css/tailwind.css'
import './registerServiceWorker'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

import router from './router'

createApp( App ).use( router, AOS ).mount('#app')
