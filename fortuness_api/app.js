const express = require('express');
const fortunes = require('./data/fortunes')

const app = express();

// GET request for all json data
app.get('/fortunes', (req, res) => {
    res.json(fortunes);
});

// GET request for one data random returned by the service
app.get('/fortunes/random', (req, res) => {
    res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

// GET request for requesting the object by id
app.get('/fortunes/:id', (req, res) => {
    res.json(fortunes.find(f => f.id == req.params.id));
});

module.exports = app;