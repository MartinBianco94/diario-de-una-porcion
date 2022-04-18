// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGnHYjqEM3PzF5njq2y5l0zqiOuZ2JDC0",
  authDomain: "proyect-0194.firebaseapp.com",
  projectId: "proyect-0194",
  storageBucket: "proyect-0194.appspot.com",
  messagingSenderId: "1068358777910",
  appId: "1:1068358777910:web:e906ad5e0d6158873fec97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
