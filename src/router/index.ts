import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import ContactView from '../views/ContactView.vue'
import ErrorView from '../views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
      props: true,
    },
    {
      path: '/menu/:productName',
      name: 'menu-product',
      component: () => import('../views/MenuDetailView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: ErrorView,
    },
  ],
})

export default router
