import { createApp } from 'vue'
import App from './App.vue'
import Icons from './plugin.js'

const app = createApp(App).use(Icons)

app.mount('#app')
