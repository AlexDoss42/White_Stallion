// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC07TT-hv-Cak1jdapVqa3W0P_ErBdYgP4",
  authDomain: "white-stallion-c1e7c.firebaseapp.com",
  projectId: "white-stallion-c1e7c",
  storageBucket: "white-stallion-c1e7c.appspot.com",
  messagingSenderId: "546871590564",
  appId: "1:546871590564:web:520016f74fb5bcd5c8f031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);