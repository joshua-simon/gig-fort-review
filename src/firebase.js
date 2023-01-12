// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB938a4mhXhA7nt4j_v3nR1iK_k7dvqffc",
  authDomain: "gig-fort-review.firebaseapp.com",
  projectId: "gig-fort-review",
  storageBucket: "gig-fort-review.appspot.com",
  messagingSenderId: "385762816666",
  appId: "1:385762816666:web:918f7a7aeebf6b6aa4e523",
  measurementId: "G-R32SRP0715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);