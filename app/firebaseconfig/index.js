// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//getAuth for authentication, getFirestore for database, getStorage to store any uploaded file/image
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ6eaw2xqk2VCfCW9Xuf4BvIBlmC__rAw",
  authDomain: "rapidreads-1c090.firebaseapp.com",
  projectId: "rapidreads-1c090",
  storageBucket: "rapidreads-1c090.appspot.com",
  messagingSenderId: "33308906162",
  appId: "1:33308906162:web:9e90c7ec249a91492befab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)