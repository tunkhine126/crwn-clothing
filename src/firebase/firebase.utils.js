import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCiYpHQVgKAOxQAgWj3kEaBpL8wzc0gt8I",
  authDomain: "crwn-db-9efbd.firebaseapp.com",
  projectId: "crwn-db-9efbd",
  storageBucket: "crwn-db-9efbd.appspot.com",
  messagingSenderId: "972955617157",
  appId: "1:972955617157:web:6188488b5ae8d8438966ec",
  measurementId: "G-SRSMBYH35D"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
