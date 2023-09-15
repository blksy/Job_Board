import axios from 'axios'
export default {
  namespaced: true,
  state: {
    jobs: [],
    job: {}
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
    },
    async fetchSingleJob({ commit }) {
      try {
        const data = await axios.get(
          'https://api.adzuna.com/v1/api/jobs/${job_id}?app_id=4ccd0d4a&app_key=4ffc409a085cb7488b9c8baa476dfafe'
        )
        commit('SET_JOB', data.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    },
    SET_JOB(state, job) {
      state.job = job
    }
  }
}
