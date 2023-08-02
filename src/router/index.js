import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import LogingSignup from '../views/LoginSignup.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainView
  },
  {
    path: '/signin',
    name: 'Login/Register',
    component: LogingSignup
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
