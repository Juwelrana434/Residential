// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyDN1HGdUqa6fkXO196pkDToTBxLMB2-FV4",
  authDomain: "house-of-peace-bff4a.firebaseapp.com",
  projectId: "house-of-peace-bff4a",
  storageBucket: "house-of-peace-bff4a.appspot.com",
  messagingSenderId: "120009374057",
  appId: "1:120009374057:web:962179f55e01c30b7565f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;