// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXMZ5akhatdo2udMjOM5EKIg6OiSHCxSM",
  authDomain: "secquralse-60d15.firebaseapp.com",
  databaseURL: "https://secquralse-60d15-default-rtdb.firebaseio.com",
  projectId: "secquralse-60d15",
  storageBucket: "secquralse-60d15.appspot.com",
  messagingSenderId: "302911623534",
  appId: "1:302911623534:web:c694d94d931e40e5e9717f",
  measurementId: "G-8NJKF9PBWS",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getDatabase();
export { database };
