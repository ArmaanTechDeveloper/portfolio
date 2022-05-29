// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHINSBeBHkl6gP2j01VKQSQu3_5xkW3yk",
  authDomain: "portfoliodata-dba61.firebaseapp.com",
  projectId: "portfoliodata-dba61",
  storageBucket: "portfoliodata-dba61.appspot.com",
  messagingSenderId: "680860364820",
  appId: "1:680860364820:web:6f84a356343ff79f92f701"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export { db };