<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
    <br />
    <button @click="googleSignIn">Sign In with Google</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
import { useRouter } from 'vue-router'

export default {
  setup() {
    // refs
    const email = ref('')
    const password = ref('')
    const router = useRouter()
    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      router.push('/profile')
      if (!error.value) {
        console.log('successful login')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style></style>
