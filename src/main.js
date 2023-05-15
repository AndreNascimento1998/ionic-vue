import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue';
import 'ionicons';

const app = createApp(App)
app.use(router) 
app.use(createPinia())
.use(IonicVue)
app.mount('#app')