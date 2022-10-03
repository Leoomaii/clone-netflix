// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGDjYoS8AgrWLyNItIXQC_4GJgpSY8tsM",
  authDomain: "clone-netflix-e4481.firebaseapp.com",
  projectId: "clone-netflix-e4481",
  storageBucket: "clone-netflix-e4481.appspot.com",
  messagingSenderId: "164720814165",
  appId: "1:164720814165:web:fc7d932219e92f16e30cdc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }