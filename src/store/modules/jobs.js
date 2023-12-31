import axios from 'axios'
export default {
  namespaced: true,
  state: {
    jobs: [],
    currentJob: {}
  },
  actions: {
    async fetchJobs({ commit }) {
      try {
        const data = await axios.get(
          'https://api.adzuna.com/v1/api/jobs/pl/search/1?app_id=4ccd0d4a&app_key=4ffc409a085cb7488b9c8baa476dfafe'
        )
        commit('SET_JOBS', data.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
    fetchJobDetails(context, payload) {
      axios
        .get(
          `https://api.adzuna.com/v1/api/jobs/${payload}?app_id=4ccd0d4a&app_key=4ffc409a085cb7488b9c8baa476dfafe`
        )
        .then((res) => res.json())
        .then((data) => {
          context.commit('SET_JOB', data)
        })
    }
  },

  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    },
    SET_JOB(state, job) {
      state.currentJob = job
    }
  }
}
