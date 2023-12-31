import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import LogingSignup from '../views/LoginSignup.vue'
import UserProfile from '../views/UserProfile.vue'
import JobResults from '../views/JobResults.vue'
import JobView from '../views/JobView.vue'
import Testimonials from '../views/Testimonials.vue'
import { projectAuth } from '../firebase/config'

//auth guard
const authGuard = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in authGuard: ', user)
  if (!user) {
    next({ name: 'Login/Register' })
  } else {
    next()
  }
}

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
    component: UserProfile,
    beforeEnter: authGuard
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResults
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/jobs/results/:id',
    name: 'SingleJobView',
    component: JobView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
