import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCRYy5H5nkW6TrqtjntREOBacJkewXoFJE",
  authDomain: "platzimusic-6cc75.firebaseapp.com",
  databaseURL: "https://platzimusic-6cc75.firebaseio.com",
  projectId: "platzimusic-6cc75",
  storageBucket: "",
  messagingSenderId: "60281406178"
};
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase
