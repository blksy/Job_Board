import { createStore } from 'vuex'
import jobs from './modules/jobs'
import user from './modules/user'

const store = createStore({
  modules: {
    jobs,
    user
  }
})

export default store
