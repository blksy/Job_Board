<template>
  <div>
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

<style></style>
