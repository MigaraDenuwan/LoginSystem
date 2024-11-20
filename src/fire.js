// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTxhbhlEl0ju5MUto8AMMdKHPIR_WPPA",
  authDomain: "tutorial-59abf.firebaseapp.com",
  projectId: "tutorial-59abf",
  storageBucket: "tutorial-59abf.appspot.com",
  messagingSenderId: "904212890443",
  appId: "1:904212890443:web:ad51ca78690952d8c4dece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();