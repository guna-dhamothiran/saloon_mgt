// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzc1mRZtWDIwMPisg-DJxvtOqomfxCe7o",
  authDomain: "loginpage-6cbfc.firebaseapp.com",
  projectId: "loginpage-6cbfc",
  storageBucket: "loginpage-6cbfc.appspot.com",
  messagingSenderId: "790531817287",
  appId: "1:790531817287:web:1a1928fc589960d35f5662",
  measurementId: "G-G02HV81P8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
