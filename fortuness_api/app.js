const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const fortunes = require('./data/fortunes');

const app = express();

app.use(bodyParser.json());

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

// POST request
app.post('/fortunes', (req, res) => {
    console.log(req.body);
    const {message, lucky_number, spirit_animal} = req.body;
    
    // array looping through all ids
    const fortune_ids = fortunes.map(f => f.id);

    const fortune = {
        id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1, 
        message, 
        lucky_number, 
        spirit_animal
    };

    const new_fortune = fortunes.concat(fortune);
    // Parse the obj to json and write it to the db
    fs.writeFile('./data/fortunes.json', JSON.stringify(new_fortune), err => console.log(err));
    res.json(new_fortune);
});

module.exports = app;