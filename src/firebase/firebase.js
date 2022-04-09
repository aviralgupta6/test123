// Import the functions you need from the SDKs you need
// import { getDatabase } from "firebase/database";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW9DsIKAxij_3-JAKl99NNMtEyiTMFZkM",
  authDomain: "gov1122.firebaseapp.com",
  databaseURL: "https://gov1122-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gov1122",
  storageBucket: "gov1122.appspot.com",
  messagingSenderId: "962884828155",
  appId: "1:962884828155:web:46f8e87c688b0c81bd295e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
