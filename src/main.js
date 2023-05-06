// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

createApp(App).use(router).use(createVuestic()).mount("#app");