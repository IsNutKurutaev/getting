import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from "v-smooth-scroll";
import headroom from "vue-headroom";
import VScrollLock from "v-scroll-lock";

createApp(App).use(VScrollLock).use(headroom).use(VueSmoothScroll).mount('#app')
