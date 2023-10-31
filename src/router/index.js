import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RestaurantIdPage from '../views/RestaurantIdPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import('../views/RestaurantsPage.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsPage.vue')
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: RestaurantIdPage
    },
    {
      path: '/:pathMach(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundPage.vue')
    }
  ]
})

export default router
