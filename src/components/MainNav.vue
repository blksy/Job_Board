<template>
  <nav class="navigation">
    <h2 class="navigation__logo">
      <img src="../assets/logo.png" alt="" />
    </h2>
    <div class="navigation__menu">
      <a href="">Job Search</a>
      <a href="">Testimonials</a>
      <a href="">Sign In</a>
      <a href="">Sign Up</a>
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
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 20px;
}

.navigation__menu > a {
  text-decoration: none;
  color: white;
}

header {
  width: 100%;
  height: 500px;
  background-image: url('../assets/job.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}

.header__title {
  position: absolute;
  top: 7rem;
  left: 3rem;
  letter-spacing: 3;
  font-weight: bolder;
  font-size: 50px;
  color: white;
  text-shadow: 4px 2px 0px rgba(0, 0, 0, 0.2);
}
.header__title > span {
  color: chartreuse;
}
</style>
