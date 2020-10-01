// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAHU494FTQlNjAIZcawujzmSuXuQSWS3FY",
    authDomain: "clone-4c78a.firebaseapp.com",
    databaseURL: "https://clone-4c78a.firebaseio.com",
    projectId: "clone-4c78a",
    storageBucket: "clone-4c78a.appspot.com",
    messagingSenderId: "966228222431",
    appId: "1:966228222431:web:eed983ecd30805fe80e46a",
    measurementId: "G-JG2NPRX0YC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};