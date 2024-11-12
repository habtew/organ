// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCtJqicSxwHAdID7URZWuvJxhbhvlp718c",
  authDomain: "organdonation-b9445.firebaseapp.com",
  projectId: "organdonation-b9445",
  storageBucket: "organdonation-b9445.firebasestorage.app",
  messagingSenderId: "778678801395",
  appId: "1:778678801395:web:ca778a58265835a28f7886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);