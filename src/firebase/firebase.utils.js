import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB63td8Xexc7tI9j5ZTHiD3ym5B8HQ2BYk",
    authDomain: "crwn-clothing-db-c321b.firebaseapp.com",
    projectId: "crwn-clothing-db-c321b",
    storageBucket: "crwn-clothing-db-c321b.appspot.com",
    messagingSenderId: "9779651667",
    appId: "1:9779651667:web:ca6aec31d5451daccdd2a6",
    measurementId: "G-1Y47387BWT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;