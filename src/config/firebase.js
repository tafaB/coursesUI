// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDGA3ihfbf2BrLkRRCXsOgr6wkpX2dDtoY",
  authDomain: "astro-1dce1.firebaseapp.com",
  projectId: "astro-1dce1",
  storageBucket: "astro-1dce1.appspot.com",
  messagingSenderId: "901236903937",
  appId: "1:901236903937:web:eaa1a46b11223c66a2f000",
  measurementId: "G-LYQ1K402WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
