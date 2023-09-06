import { createStore } from 'vuex'
import jobs from './modules/jobs'

const store = createStore({
  modules: {
    jobs
  }
})

export default store
