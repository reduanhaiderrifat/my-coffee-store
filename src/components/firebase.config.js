// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKJcrivkASq3iETH0iv6-ZQrrbjfwrNpA",
  authDomain: "my-coffee-store-25168.firebaseapp.com",
  projectId: "my-coffee-store-25168",
  storageBucket: "my-coffee-store-25168.appspot.com",
  messagingSenderId: "41057905984",
  appId: "1:41057905984:web:032673638ec1d625f01ea5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
