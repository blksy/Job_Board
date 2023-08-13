import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import LogingSignup from '../views/LoginSignup.vue'
import UserProfile from '../views/UserProfile.vue'
import JobSearch from '../views/JobSearch.vue'
import Testimonials from '../views/Testimonials.vue'

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
  },
  {
    path: '/jobsearch',
    name: 'JobSearch',
    component: JobSearch
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
