<template>
  <div class="login container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="redicrectToProfile" />
      <p>No account yet? <span @click="showLogin = false">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="redicrectToProfile" />
      <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const redicrectToProfile = () => {
      router.push({ name: 'UserProfile' })
    }

    return { showLogin, redicrectToProfile }
  }
}
</script>
<style>
.login {
  text-align: center;
  padding: 20px 0;
}
.login form {
  width: 300px;
  margin: 20px auto;
}
.login label {
  display: block;
  margin: 20px 0 10px;
}
.login input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid black;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.login span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.login button {
  margin: 20px auto;
}
</style>
