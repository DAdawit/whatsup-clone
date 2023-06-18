// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVJ8qCWIO82bd5sLib1D9SwNBhLS5vPSM",
  authDomain: "whatsup-clone-b3193.firebaseapp.com",
  projectId: "whatsup-clone-b3193",
  storageBucket: "whatsup-clone-b3193.appspot.com",
  messagingSenderId: "727614970857",
  appId: "1:727614970857:web:04d2ccafdb45f16f970978",
  measurementId: "G-4P9LR7G1J3",
};

// Initialize Firebase
const firestoreApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
// const analytics = getAnalytics(app);

export { firestoreApp, googleProvider, auth };
