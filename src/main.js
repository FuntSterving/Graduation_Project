import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'
import 'bootstrap/dist/css/bootstrap.css';


import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB8RquUR3B_0F3BGBBYNYicisIb_JSqmjU',
  authDomain: 'graduationproject-9e587.firebaseapp.com',
  projectId: 'graduationproject-9e587',
  storageBucket: 'graduationproject-9e587.appspot.com',
  messagingSenderId: '79282910993',
  appId: '1:79282910993:web:978845bf384865242c3eb0'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.mount('#app')
