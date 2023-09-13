<template>
  <MainNav />
  <div class="page-wrapper">
    <h3>Welcome {{ user.email }} to Your profile Page</h3>
    <div class="container">
      <div class="image-wrapper">
        <figure class="icon">
          <img class="is-rounded" src="http://via.placeholder.com/100x100" />
        </figure>
      </div>
      <div class="user-info">
        <p>
          <span class="title is-bold">John Doe</span>
          <br />
        </p>
        <p class="description">Very short user info</p>
      </div>
      <button class="button">Update Info</button>
    </div>
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

<style scoped>
h3 {
  font-weight: bold;
  font-size: 40px;
  padding-top: 50px;
}
.page-wrapper {
  text-align: center;
}
.container {
  margin-top: 40px;
  height: 900px;
  width: 1000px;
}
.image-wrapper {
  display: flex;
  margin-left: 40px;
  padding-top: 40px;
}
.icon {
  display: flex;
  width: 150px;
  height: 150px;
  stroke-width: 2px;
  fill: none;
}
</style>
