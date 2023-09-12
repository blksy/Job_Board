<template>
  <form class="signupForm" @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name and surname" v-model="displayName" />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composition/useSignup.js'
import { useRouter } from 'vue-router'

export default {
  setup(props, context) {
    //references
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const { error, signup, isPending } = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        context.emit('signup')
        router.push({ name: 'UserProfile' })
      }
    }

    return { displayName, email, password, handleSubmit, error, isPending }
  }
}
</script>

<style scoped></style>
