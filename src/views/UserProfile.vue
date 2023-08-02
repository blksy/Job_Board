<template>
  <div>
    <h1>USER PROFILE</h1>
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import SigninForm from '../components/SigninForm.vue'
import SignupForm from '../components/SignupForm.vue'

export default {
  components: { SignupForm, SigninForm }
}
</script>

<style></style>
