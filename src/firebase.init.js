// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCvpFshJ-44QShw4GcUoXVcqtxS4vUi8Q",
  authDomain: "privete-route-with-auth.firebaseapp.com",
  projectId: "privete-route-with-auth",
  storageBucket: "privete-route-with-auth.appspot.com",
  messagingSenderId: "447555715692",
  appId: "1:447555715692:web:767dfe9ee912dd4490ce49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;