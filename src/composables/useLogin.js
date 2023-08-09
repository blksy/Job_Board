import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { useRouter } from 'vue-router'
const error = ref(null)

const login = async (email, password) => {
  error.value = null
  try {
    const response = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    console.log(res)
    return response
  } catch (err) {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin
