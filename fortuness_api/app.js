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

const writeFortunes = json => {
    fs.writeFile('./data/fortunes.json', JSON.stringify(json), err => console.log(err));
};

// POST request
app.post('/fortunes', (req, res) => {
    const {message, lucky_number, spirit_animal} = req.body;
    
    // array looping through all ids
    const fortune_ids = fortunes.map(f => f.id);

    // append the new json into the existing json object
    const new_fortune = fortunes.concat({
        id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1, 
        message, 
        lucky_number, 
        spirit_animal
    });

    // Replce all content in the file with the json objs above
    writeFortunes(new_fortune);
    res.json(new_fortune);
});

// PUT request
app.put('/fortunes/:id', (req, res) => {
    const {id} = req.params;

    const old_fortune = fortunes.find(f => f.id == id);

    ['message', 'lucky_number', 'spirit_number'].forEach(key => {
        if (req.body[key]) old_fortune[key] = req.body[key];
    });

    // Replce all content in the file with the json objs above
    writeFortunes(fortunes);
    res.json(fortunes);
});

app.delete('/fortunes/:id', (req, res) => {
    const { id } = req.params;

    const new_fortune = fortunes.filter(f => f.id != id);

    writeFortunes(new_fortune);

    res.json(new_fortune);
});


module.exports = app;