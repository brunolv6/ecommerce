import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA7Ba1fRYIG-ykmLMRrJa7cl03YHgmZJdk",
    authDomain: "store-db-c45cb.firebaseapp.com",
    databaseURL: "https://store-db-c45cb.firebaseio.com",
    projectId: "store-db-c45cb",
    storageBucket: "",
    messagingSenderId: "62242045969",
    appId: "1:62242045969:web:1d01a6dd940feed6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;