<template>
  <form class="signupForm" @submit.prevent="handleSubmit">
    <input
      class="inputFields"
      type="text"
      required
      placeholder="Name and surname"
      v-model="displayFullName"
    />
    <input class="inputFields" type="email" required placeholder="email" v-model="email" />
    <input
      class="inputFields"
      type="tel"
      required
      placeholder="phone number Format: 123-456-789"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
    />
    <input class="inputFields" type="password" required placeholder="password" v-model="password" />
    <button class="button">Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const displayFullName = ref('')
    const email = ref('')
    const phone = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log(displayFullName.value, email.value, phone.value, password.value)
    }

    return { displayFullName, email, phone, password, handleSubmit }
  }
}
</script>

<style scoped></style>
