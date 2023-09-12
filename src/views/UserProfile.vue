<template>
  <MainNav />
  <div>
    <p>Hey there!</p>
    <p>Currently logged in as {{ user.email }}</p>
  </div>
</template>

<script>
import MainNav from '../components/MainNav.vue'
import getUser from '../composition/getUser'

export default {
  components: { MainNav },
  setup() {
    const { user } = getUser()

    return { user }
  }
}
</script>

<style></style>
