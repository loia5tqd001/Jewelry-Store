// https://firebase.google.com/docs/web/setup?authuser=0#using-module-bundlers
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Is it safe to expose firebase apikey:
// https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
const config = {
  apiKey: "AIzaSyDGFrB60nmsp89LK6BdJ7ki42z9smB8TdI",
  authDomain: "jquerystore-f3df7.firebaseapp.com",
  databaseURL: "https://jquerystore-f3df7.firebaseio.com",
  projectId: "jquerystore-f3df7",
  storageBucket: "jquerystore-f3df7.appspot.com",
  messagingSenderId: "894397812455",
  appId: "1:894397812455:web:cddb6531f7f46ddd001c42",
  measurementId: "G-ZQZ0HX0T43"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

export default firebase;
