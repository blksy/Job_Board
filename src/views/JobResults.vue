<template>
  <MainNav />
  <div class="main-container">
    <job-filter-sidebar />
    <job-listings />
  </div>
</template>

<script>
import MainNav from '../components/MainNav.vue'
import JobFilterSidebar from '../components/JobFiltersSidebar.vue'
import JobListings from '../components/JobListings.vue'
export default {
  components: { JobFilterSidebar, JobListings, MainNav },
  setup() {}
}
</script>

<style>
.main-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
