import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WeatherWidget from '../components/WeatherCast.vue'; 

const routes = [
  { path: '/', component: HomeView },
  { path: '/weather', component: WeatherWidget },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;