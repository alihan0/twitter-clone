// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuLAOxTUkCIGFxSw4f__MRKTiPsiuj3HE",
  authDomain: "twitter-clone-14e20.firebaseapp.com",
  projectId: "twitter-clone-14e20",
  storageBucket: "twitter-clone-14e20.appspot.com",
  messagingSenderId: "8219908597",
  appId: "1:8219908597:web:0ad1f298de995ba1e028bc",
  measurementId: "G-T49D4RZJWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
