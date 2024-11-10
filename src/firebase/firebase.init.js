// P.S. Never store firebase config client side


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyACXGaDxUsZutwLPp5cCw66QTzX9FhDOH0",

  authDomain: "auth-firebase-test-c4f70.firebaseapp.com",

  projectId: "auth-firebase-test-c4f70",

  storageBucket: "auth-firebase-test-c4f70.firebasestorage.app",

  messagingSenderId: "118612349659",

  appId: "1:118612349659:web:0f52680483282f814272fe",

  measurementId: "G-2P9VY106H8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;