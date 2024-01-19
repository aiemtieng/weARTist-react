// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxNKMjE5d4Tml78RbofaPNQoAX2FYpcfM",
  authDomain: "weartist-vitereact.firebaseapp.com",
  projectId: "weartist-vitereact",
  storageBucket: "weartist-vitereact.appspot.com",
  messagingSenderId: "952895018564",
  appId: "1:952895018564:web:38f8688f9822e768440e11",
  measurementId: "G-SRDQC9KY0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;