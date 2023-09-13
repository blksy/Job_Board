<template>
  <nav class="navigation">
    <h2 class="navigation__logo">
      <img src="../assets/logo.png" alt="" />
    </h2>
    <div class="navigation__menu">
      <router-link to="/"><a href="">Home</a></router-link>
      <router-link to="/jobs/results"><a href="">Job Search</a></router-link>
      <router-link to="/testimonials"><a href="">Testimonials</a></router-link>
      <router-link to="/profile"><a href="">Profile</a></router-link>
      <router-link to="/signin"><button v-if="!user">Log in /Sign Up</button></router-link>
      <button @click="handleClick" v-if="user">Logout</button>
    </div>
  </nav>
</template>

<script>
import useLogout from '../composition/useLogout'
import getUser from '../composition/getUser'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const { logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      console.log('logged out')
      router.push({ name: 'Login/Register' })
    }

    return { handleClick, user }
  }
}
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
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
  display: inline-block;
  padding: 0px 10px;
  font-size: 20px;
  font-weight: bold;
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
