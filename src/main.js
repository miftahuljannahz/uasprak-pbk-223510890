import { createApp } from 'vue';
import { Quasar } from 'quasar';
import './style.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css';
import router from './router/index'; 
import App from './App.vue';
const app = createApp(App);
app.use(Quasar, {
});
app.use(router);
app.mount('#app');