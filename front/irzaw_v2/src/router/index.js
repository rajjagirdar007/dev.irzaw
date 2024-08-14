import { createRouter, createWebHistory } from 'vue-router';
import homeView from '../views/home.vue';
import loginView from '../views/loginView.vue';
import projectsPanel from '../views/projects/panel.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView,
  },
  {
    path: '/login',
    name: 'login',
    component: loginView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: projectsPanel,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

