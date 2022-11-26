import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage/HomePage.vue';
import BlogPage from '../pages/BlogPage/BlogPage.vue';
import ProductsPage from '../pages/ProductsPage/ProductsPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
