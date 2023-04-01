import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from "v-smooth-scroll";
import headroom from "vue-headroom";

createApp(App).use(headroom).use(VueSmoothScroll).mount('#app')
