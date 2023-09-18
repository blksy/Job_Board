import { createStore } from 'vuex'
import jobs from './modules/jobs'
import companies from './modules/companies'
const store = createStore({
  modules: {
    jobs,
    companies
  }
})

export default store
