<template>
  <MainNav />
  <section class="job-details">
    <h1 class="heading">Job {{}} Details</h1>
    <div class="details">
      <div class="job-info">
        <h3>Title</h3>
        <p>Company</p>
        <p>Location</p>
      </div>
      <div class="basic-details">
        <p>Job description</p>
      </div>
    </div>
  </section>
</template>

<script>
import MainNav from '../components/MainNav.vue'
import { mapState } from 'vuex'

export default {
  name: 'JobView',
  components: { MainNav },
  computed: {
    ...mapState(['jobs']),
    currentJobId() {
      return this.$store.dispatch('getbyId')
    }
  }
}
</script>

<style></style>
