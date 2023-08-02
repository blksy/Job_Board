<template>
  <div class="container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm />
      <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)

    return { showLogin }
  }
}
</script>
<style>
h2 {
  padding-top: 20px;
}
.container {
  text-align: center;
  padding: 20px 0;
  height: 500px;
}
.container form {
  width: 400px;
  height: 300px;
  margin: 30px auto;
}
.container input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: black;
  margin: 10px auto;
}
.container span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.container button {
  margin: 30px auto;
  width: 200px;
  height: 50px;
}
</style>
