<template>
  <main class="main">
    <ol>
      <job-listing />
      <job-listing />
      <job-listing />
      <job-listing />
    </ol>
  </main>
</template>

<script>
import JobListing from './JobListing.vue'

export default {
  components: { JobListing }
}
</script>
