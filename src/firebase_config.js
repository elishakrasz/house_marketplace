// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOmes0kJUB8aoIT8FliHGTAkYZN2TMqvE",
  authDomain: "house-marketplace-app-bd2ca.firebaseapp.com",
  projectId: "house-marketplace-app-bd2ca",
  storageBucket: "house-marketplace-app-bd2ca.appspot.com",
  messagingSenderId: "901506866075",
  appId: "1:901506866075:web:52d7dc26c4c34c6dc15f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()