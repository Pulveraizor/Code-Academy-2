// let server = require('./web.js');
//
// server.listen(80);

const express = require('express');
const app = express();
const port = 80;

app.set('view engine', 'pug');

const os = require('os');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/cpu', (req, res) => {
    res.send(os.cpus());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});