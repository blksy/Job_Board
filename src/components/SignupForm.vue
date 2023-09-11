<template>
  <form class="signupForm" @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name and surname" v-model="displayName" />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <input type="password" required placeholder="Repeat password" v-model="passwordConfirmation" />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
    <a>Sign In With Google</a>&nbsp;
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composition/useSignup.js'

export default {
  setup() {
    const { error, signup } = useSignup()
    //references
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const passwordConfirmation = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return { displayName, email, password, handleSubmit, error, passwordConfirmation }
  }
}
</script>

<style scoped></style>
