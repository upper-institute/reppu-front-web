import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAadV8WQ0B_19o6HHUiGV9rncOsuF-BNyE",
    authDomain: "reppu-f130c.firebaseapp.com",
    projectId: "reppu-f130c",
    storageBucket: "reppu-f130c.appspot.com",
    messagingSenderId: "1053452899323",
    appId: "1:1053452899323:web:df25cd9cde52a3d764b15e"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)