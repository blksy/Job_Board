<template>
  <MainNav />
  <div>Single Job View for job {{ currentJobId }}</div>
</template>

<script>
import MainNav from '../components/MainNav.vue'
export default {
  name: 'JobView',
  components: { MainNav },
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
}
</script>

<style></style>
