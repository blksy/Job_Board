import axios from 'axios'
export default {
  namespaced: true,
  state: {
    companies: []
  },
  actions: {
    async fetchTopCompanies({ commit }) {
      try {
        const data = await axios.get(
          'https://api.adzuna.com/v1/api/jobs/pl/top_companies?app_id=4ccd0d4a&app_key=4ffc409a085cb7488b9c8baa476dfafe'
        )
        commit('SET_COMPANIES', data.data.leaderboard)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  mutations: {
    SET_COMPANIES(state, companies) {
      state.companies = companies
    }
  }
}
