<template>
  <div class="main-container">
    <job-filter-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFilterSidebar from '../components/JobFiltersSidebar.vue'
import JobListings from '../components/JobListings.vue'
export default {
  components: { JobFilterSidebar, JobListings },
  setup() {}
}
</script>

<style>
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
</style>
