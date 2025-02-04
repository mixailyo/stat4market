import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Мой склад' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
