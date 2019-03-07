import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

    const config = {
        apiKey: "AIzaSyDF-ZVDAeZgwb8BAaUpHerrNIIDDQ17Nn8",
        authDomain: "jaakit-webshop.firebaseapp.com",
        databaseURL: "https://jaakit-webshop.firebaseio.com",
        projectId: "jaakit-webshop",
        storageBucket: "jaakit-webshop.appspot.com",
        messagingSenderId: "528556430964"
    };

    firebase.initializeApp(config);
    //firebase.firestore().settings({timestampsInSnapshots: true}); 

 } 

const fireDb = firebase.firestore();

export { fireDb }








