import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default db;