// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCESqqxbzErlozcHnPiqEkmisBi8q5Awc",
  authDomain: "coderhouse-ecommerce-1fcf5.firebaseapp.com",
  projectId: "coderhouse-ecommerce-1fcf5",
  storageBucket: "coderhouse-ecommerce-1fcf5.appspot.com",
  messagingSenderId: "4976274557",
  appId: "1:4976274557:web:ce4dff893ec204f8c6d514",
  measurementId: "G-338JGY2EQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)