
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import 'firebase/compat/storage'
// import 'firebase/compat/messaging'
// import 'firebase/compat/functions'

import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCHL6DVgKl-5kKEHIrHAFNTXMnPUewkxfw",
  authDomain: "edith-india.firebaseapp.com",
  projectId: "edith-india",
  storageBucket: "edith-india.appspot.com",
  messagingSenderId: "1004777730101",
  appId: "1:1004777730101:web:866902d2795222bb36c17c",
  measurementId: "G-CBSGEDPF10"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();

export default db;