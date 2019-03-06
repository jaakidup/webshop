const functions = require('firebase-functions')
const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('hello world.');
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

exports.api = functions.https.onRequest(app)