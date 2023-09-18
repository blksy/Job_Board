<template>
  <MainNav />
  <section class="job-details">
    <h1 class="heading">Job {{ jobID }} Details</h1>
    <div class="details">
      <div class="job-info">
        <h3></h3>
        <p>Company</p>
        <p>Location</p>
      </div>
      .ba
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MainNav from '../components/MainNav.vue'
export default {
  name: 'JobView',
  components: { MainNav },
  computed: {
    ...mapState(['jobs']),
    job() {
      return this.$store.state.currentJob
    },
    jobID() {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions(['jobs/fetchJobDetails'])
  }
}
</script>

<style></style>
