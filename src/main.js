import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from "v-smooth-scroll";
import VScrollLock from "v-scroll-lock";

createApp(App).use(VScrollLock).use(VueSmoothScroll).mount('#app')
