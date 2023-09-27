<template>
  <MainNav />
  <Header />
  <TopCompanies v-if="companies" />
</template>

<script>
import MainNav from '../components/MainNav.vue'
import Header from '../components/Header.vue'
import TopCompanies from '../components/TopCompanies.vue'
import { mapState } from 'vuex'

export default {
  components: { MainNav, Header, TopCompanies },
  computed: {
    ...mapState(['companies'])
  },
  mounted() {
    console.log('before')
    this.$store.dispatch('companies/fetchTopCompanies')
  }
}
</script>
