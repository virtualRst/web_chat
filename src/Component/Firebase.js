
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import 'firebase/compat/storage'
// import 'firebase/compat/messaging'
// import 'firebase/compat/functions'

import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDZmCo8iMVgY4hOccW-d60Qg6JRyHt9ltI",
    authDomain: "makemyfriend-new.firebaseapp.com",
    projectId: "makemyfriend-new",
    storageBucket: "makemyfriend-new.appspot.com",
    messagingSenderId: "809651204464",
    appId: "1:809651204464:web:99969cfd805ca93324dfb5",
    measurementId: "G-SJJC3VCZ42"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();

export default db;