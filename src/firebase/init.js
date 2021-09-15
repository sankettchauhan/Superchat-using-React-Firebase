import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyC5qx5wkh8QQH96Q08jVorwJpms0Kws_3E",
  authDomain: "superchat-using-react.firebaseapp.com",
  projectId: "superchat-using-react",
  storageBucket: "superchat-using-react.appspot.com",
  messagingSenderId: "711056266642",
  appId: "1:711056266642:web:4732e031c02c3589985d4b",
  measurementId: "G-9T9HBFDMSF",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
