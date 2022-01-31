const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.get('/apie-mus', (req, res) => {
    fs.readFile(path.join(__dirname, 'apie-mus.html'), 'utf8', (err, data) => {
        if(err) throw err;
        res.send(data);
    });
    // res.sendFile(__dirname + '/apie-mus.html');
});

app.get('/kontaktai', (req, res) => {
    fs.readFile(path.join(__dirname, 'kontaktai.html'), 'utf8', (err, data) => {
        if(err) throw err;
        res.send(data);
    });
    // res.sendFile(__dirname + '/kontaktai.html');
});

app.listen(3000);