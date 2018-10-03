import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyACWd3NdoxIx4rl4wOa-d9W50wmez6kD4A",
    authDomain: "marioplan-f2906.firebaseapp.com",
    databaseURL: "https://marioplan-f2906.firebaseio.com",
    projectId: "marioplan-f2906",
    storageBucket: "marioplan-f2906.appspot.com",
    messagingSenderId: "183936676906"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase