<template>
  <MainNav />
  <Header />
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    Header
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Nunito', sans-serif;
}
</style>
