import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_2NFMc1fSBLsJN6yK9kYW1FJwJl-a4dM",
    authDomain: "facebook-clone-2bb17.firebaseapp.com",
    projectId: "facebook-clone-2bb17",
    storageBucket: "facebook-clone-2bb17.appspot.com",
    messagingSenderId: "481952358770",
    appId: "1:481952358770:web:6022c9b4ae067ccdd9fdeb",
    measurementId: "G-GT48JBFMGY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();