// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA8QeGc4QJauFErehshMxqB-EWoprFcRaU",
  authDomain: "fingerdataentry.firebaseapp.com",
  projectId: "fingerdataentry",
  storageBucket: "fingerdataentry.appspot.com",
  messagingSenderId: "86782924081",
  appId: "1:86782924081:web:b51d93e348c365cb494c10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
