import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBSBoDty2NuwWtW7QFeQtZpZUzjtS_nKBo',
  authDomain: 'job-board-1b79e.firebaseapp.com',
  projectId: 'job-board-1b79e',
  storageBucket: 'job-board-1b79e.appspot.com',
  messagingSenderId: '589701471740',
  appId: '1:589701471740:web:bb9d68df58bb0cb192a679'
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
