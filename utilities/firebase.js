import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCEVcfQykXYOAkxD3CopzTCuaT-9zzqPkQ",
    authDomain: "restaurants-b56e3.firebaseapp.com",
    projectId: "restaurants-b56e3",
    storageBucket: "restaurants-b56e3.appspot.com",
    messagingSenderId: "26662552564",
    appId: "1:26662552564:web:ac982275c2565d2c60afa1"
  }
  
export const firebaseApp = firebase.initializeApp(firebaseConfig)