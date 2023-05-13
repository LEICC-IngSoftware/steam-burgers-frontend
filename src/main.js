// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import router from './router'
import mitt from 'mitt'

const emitter = mitt()

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from './store'

const app = createApp(App).use(store).use(router).use(createVuestic());

app.config.globalProperties.emitter = emitter
app.mount('#app')