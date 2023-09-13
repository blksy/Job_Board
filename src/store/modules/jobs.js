import axios from 'axios'
export default {
  namespaced: true,
  state: {
    jobs: []
  },
  actions: {
    async fetchJobs({ commit }) {
      try {
        const data = await axios.get(
          'https://api.adzuna.com/v1/api/jobs/pl/search/1?app_id=4ccd0d4a&app_key=4ffc409a085cb7488b9c8baa476dfafe&results_per_page=10&category=it-jobs&sort_by=date&salary_include_unknown=1&full_time=1'
        )
        commit('SET_JOBS', data.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  getters: {
    getbyId(state) {
      return (id) => state.jobs.find((job) => job.id === id)
    }
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    }
  }
}
