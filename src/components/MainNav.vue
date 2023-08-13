<template>
  <nav class="navigation">
    <h2 class="navigation__logo">
      <img src="../assets/logo.png" alt="" />
    </h2>
    <div class="navigation__menu">
      <router-link to="/jobsearch"><a href="">Job Search</a></router-link>
      <router-link to="/testimonials"><a href="">Testimonials</a></router-link>
      <router-link to="/signin"><button>Sign In / Sign Up</button></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  padding: 1rem 2.5rem;
  z-index: 10;
  color: white;
  background: black;
  border-bottom: 1px solid black;
}
.navigation__menu {
  width: 450px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 20px;
  padding-bottom: 20px;
}

.navigation__menu > a {
  text-decoration: none;
  color: white;
}

a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: greenyellow;
  cursor: pointer;
}
button {
  border: 2px solid white;
  margin-top: -10px;
  font-size: 15px;
}
</style>
