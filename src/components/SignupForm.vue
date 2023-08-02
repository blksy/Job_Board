<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name and surname" v-model="displayFullName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input
      type="tel"
      required
      placeholder="phone number Format: 123-456-789"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
    />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sign up</button>
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

    return { displayFullName, email, phone, password }
  }
}
</script>

<style></style>
