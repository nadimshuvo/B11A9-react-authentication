// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRH78Kptz9p6M24MONN1TI2vni2bKZWkw",
  authDomain: "react-authentcation-aba6f.firebaseapp.com",
  projectId: "react-authentcation-aba6f",
  storageBucket: "react-authentcation-aba6f.firebasestorage.app",
  messagingSenderId: "1076644612563",
  appId: "1:1076644612563:web:9bfd09532b63a548680726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;