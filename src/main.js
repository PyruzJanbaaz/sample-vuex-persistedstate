import { createApp } from 'vue'
import App from './App.vue'
import Vuex from  'vuex'
import {store} from "@/store/store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
    .use(Vuex)
    .use(store)
    .mount('#app');
