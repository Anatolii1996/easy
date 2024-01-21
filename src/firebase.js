// Import the functions you need from the SDKs you need
/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3Gh2moaMx9Kv1R98vQJG0j4RbM72dx4",
  authDomain: "laboratory-1-5dcc7.firebaseapp.com",
  projectId: "laboratory-1-5dcc7",
  storageBucket: "laboratory-1-5dcc7.appspot.com",
  messagingSenderId: "391311449941",
  appId: "1:391311449941:web:bae7f482bf8231f8d559dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);