// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8RquUR3B_0F3BGBBYNYicisIb_JSqmjU",
  authDomain: "graduationproject-9e587.firebaseapp.com",
  projectId: "graduationproject-9e587",
  storageBucket: "graduationproject-9e587.appspot.com",
  messagingSenderId: "79282910993",
  appId: "1:79282910993:web:978845bf384865242c3eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }