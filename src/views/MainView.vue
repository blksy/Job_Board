<template>
  <MainNav />
  <Header />
  <TopCompanies />
</template>

<script>
import MainNav from '../components/MainNav.vue'
import Header from '../components/Header.vue'
import TopCompanies from '../components/TopCompanies.vue'
export default {
  components: { MainNav, Header, TopCompanies }
}
</script>
