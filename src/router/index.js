import { createRouter, createWebHistory } from 'vue-router'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
