

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2zw_6ws4JkX_1orPgkpIQoGQ_RG6Hcps",
    authDomain: "tik-tok-clone-e836a.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-e836a.firebaseio.com",
    projectId: "tik-tok-clone-e836a",
    storageBucket: "tik-tok-clone-e836a.appspot.com",
    messagingSenderId: "1008577952326",
    appId: "1:1008577952326:web:7e67011b17c614c96f2847",
    measurementId: "G-W740LETMC7"
});

const db = firebaseApp.firestore();


export { db };