<template>
  <main class="main">
    <ol :ref="'list'">
      <template v-for="job in jobs" :key="job.id">
        <JobListing :job="job" />
      </template>
    </ol>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import JobListing from './JobListing.vue'

const store = useStore()

const jobs = computed(() => {
  return store.state.jobs.results
})
onMounted(() => {
  store.dispatch('fetchJobs')
})
</script>
