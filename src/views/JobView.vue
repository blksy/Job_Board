<template>
  <MainNav />
  <section class="job-details">
    <h1 class="heading">Job {{ currentJobId }} Details</h1>
    <div class="details">
      <div class="job-info">
        <h3>Title</h3>
        <p>Company</p>
        <p>Location</p>
      </div>
      .ba
    </div>
  </section>
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
