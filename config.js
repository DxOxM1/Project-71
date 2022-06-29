import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC6UcXw8MTpFkyWBz-cp_JVF4IY6O-ERvU",
    authDomain: "class71-3d198.firebaseapp.com",
    projectId: "class71-3d198",
    storageBucket: "class71-3d198.appspot.com",
    messagingSenderId: "705587903570",
    appId: "1:705587903570:web:7b662f53a5a330843f738b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
