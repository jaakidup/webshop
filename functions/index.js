const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();


const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the real world.</h1> <br/> ');
});

app.get('/test', (req, res) => {
    res.status(200).json({ message: "Hello from Firebase Functions!" });
});

app.get('/test/:testId', (req, res) => {
    res.status(200).json({ message: "Hello from Firebase Functions!", id: req.params.testId });
});

app.post('/test', (req, res) => {
    res.status(200).json({ payload: req.body });
});


app.get('/cities', (req, res) => {

    const results = [];

    db.collection('cities').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            results.push(doc.data());
        });
        res.status(200).json({ message: "These are the people and cities I found", people: results });
    }).catch(err => {
        res.status(500).json({ message: "Something went wrong", error: err });
    });
});



exports.api = functions.https.onRequest(app)