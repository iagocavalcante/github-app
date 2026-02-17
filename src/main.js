import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Hello from './components/Hello.vue'
import Repos from './components/Repos.vue'
import Error404 from './components/Error404.vue'

const routes = [
  { path: '/', component: Hello },
  { path: '/repos', component: Repos },
  { path: '/:catchAll(.*)*', component: Error404 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(Quasar)
app.use(router)
app.mount('#q-app')

console.log('App mounted')
