// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxxwwCO9U5WulqLwjRFVXGTpJB6_CBnGE",
  authDomain: "zara-chabby-login.firebaseapp.com",
  projectId: "zara-chabby-login",
  storageBucket: "zara-chabby-login.firebasestorage.app",
  messagingSenderId: "975107354460",
  appId: "1:975107354460:web:3cbb4cdcc6ab91ede31b99",
  measurementId: "G-9VHZGX9BN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);