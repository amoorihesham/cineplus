// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQtKpW1ubHGGF_9iH5vShRCZhVloU9vA8",
    authDomain: "cineplus-e83de.firebaseapp.com",
    projectId: "cineplus-e83de",
    storageBucket: "cineplus-e83de.appspot.com",
    messagingSenderId: "718501773337",
    appId: "1:718501773337:web:69ed31f9f04bda32d8aa88",
    measurementId: "G-SHEBQSV55V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
