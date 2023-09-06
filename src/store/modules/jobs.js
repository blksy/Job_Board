import axios from 'axios'

const jobs = {
  namespaced: true,
  state: {
    jobs: []
  },
  getters: {
    getJobs: (state) => state.jobs
  },
  mutations: {
    SET_JOBS(state, data) {
      state.jobs = data
    }
  },
  actions: {
    async fetchJobs({ commit }) {
      axios
        .get(
          'https://api.adzuna.com/v1/api/jobs/pl/search/1?app_id=4ccd0d4a&app_key=4ffc409a085cb7488b9c8baa476dfafe'
        )
        .then((res) => {
          commit('SET_JOBS', res.data)
        })
        .catch((error) => console.log(error))
    }
  }
}

export default jobs
