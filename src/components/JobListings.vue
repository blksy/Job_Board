<template>
  <main class="main">
    <ol>
      <job-listing v-for="job in jobs" :key="job.id" />
    </ol>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('jobs', ['jobs'])
  },
  created() {
    this.$store.dispatch('jobs/fetchJobs')
  }
}
</script>
