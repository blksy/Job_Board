<template>
  <form class="signupForm" @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name and surname" v-model="displayName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup.js'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, signup } = useSignup()
    //references
    const router = useRouter()
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        router.push('/profile')
      }
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style scoped></style>
