import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmIvdX6LfAUrRZww35uAvpcE22KLoHo14",
  authDomain: "facebook-messenger-clone-7c36b.firebaseapp.com",
  projectId: "facebook-messenger-clone-7c36b",
  storageBucket: "facebook-messenger-clone-7c36b.appspot.com",
  messagingSenderId: "525732482483",
  appId: "1:525732482483:web:dad306c697fbac898b8fc6"
});

const db = firebaseApp.firestore();
export default db;