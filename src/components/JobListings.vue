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
import axios from 'axios'
export default {
  components: { JobListing },
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    axios
      .get(
        'https://api.adzuna.com/v1/api/jobs/pl/search/1?app_id=4ccd0d4a&app_key=4ffc409a085cb7488b9c8baa476dfafe'
      )
      .then((response) => {
        this.jobs = response.data
      })
  }
}
</script>
