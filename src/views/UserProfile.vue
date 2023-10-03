<template>
  <MainNav />
  <div class="user-profile">
    <div class="user-info">
      <h2>{{ user.name }}{{ ' ' + user.surname }}</h2>
      <h2></h2>
      <p>Email: {{ user.email }}</p>
      <p>Age: {{ user.age }}</p>
    </div>
    <button @click="showUpdateForm">Update Personal Info</button>
    <div v-if="showForm" class="update-form">
      <h3>Update Personal Info</h3>
      <form @submit.prevent="updateUserInfo">
        <label for="name">Name:</label>
        <input v-model="updatedUser.name" type="text" id="name" required />
        <label for="name">Name:</label>
        <input v-model="updatedUser.surname" type="text" id="surname" required />
        <label for="email">Email:</label>
        <input v-model="updatedUser.email" type="email" id="email" required />
        <label for="age">Age:</label>
        <input v-model="updatedUser.age" type="number" id="age" required />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script>
import MainNav from '../components/MainNav.vue'
import getUser from '../composition/getUser'
import { ref } from 'vue'
export default {
  components: {
    MainNav
  },
  setup() {
    const { user } = getUser()
    const showForm = ref(false)
    const updatedUser = ref({ name: '', surname: '', email: '', age: 0 })
    return { user, showForm, updatedUser }
  },
  methods: {
    showUpdateForm() {
      this.showForm = true
    },
    updateUserInfo() {
      this.user = { ...this.updatedUser }
      this.showForm = false
    }
  }
}
</script>

<style scoped>
.user-profile {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  text-align: center;
}

.user-info {
  margin-bottom: 20px;
}

.update-form {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

button {
  margin-top: 10px;
}
</style>
