import { createApp } from 'vue'
import App from './App.vue'
import Icons from './plugin.js'

const app = createApp(App).use(Icons, { width: 30, class: 'fill-current' })

app.mount('#app')
