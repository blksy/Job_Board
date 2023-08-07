<template>
  <form class="signupForm" @submit.prevent="handleSubmit">
    <input
      class="inputFields"
      type="text"
      required
      placeholder="Name and surname"
      v-model="displayName"
    />
    <input class="inputFields" type="email" required placeholder="email" v-model="email" />
    <input class="inputFields" type="password" required placeholder="password" v-model="password" />
    <button class="button">Sign up</button>
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
    const phone = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      router.push('/profile')
    }

    return { displayName, email, phone, password, handleSubmit }
  }
}
</script>

<style scoped></style>
