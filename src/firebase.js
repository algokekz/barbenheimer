// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa-uIPFEpM6fMQKrsaC4xFn20q0jeQ5Fc",
  authDomain: "barbenheimer-fe24b.firebaseapp.com",
  projectId: "barbenheimer-fe24b",
  storageBucket: "barbenheimer-fe24b.appspot.com",
  messagingSenderId: "722656337692",
  appId: "1:722656337692:web:e43a2fe90b9099d43364d9",
  measurementId: "G-VBZR3Q0725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
