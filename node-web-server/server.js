const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// GET request
app.get('/', (req, res) => {
    // res.send('<h1>Hello world</h1>');

    // code below returning the data through json
    // res.send({
    //     name: 'Andrew',
    //     likes: [
    //         'Biking',
    //         'Cities'
    //     ]
    // });

    // render the template I setup for view engine
    res.render('home.hbs', {
        // Data I want to pass to
        pageTitle: 'Home page',
        welcomeMessage: 'Hello world',
    });
});

app.get('/about', (req, res) => {
    // render the template I setup for view engine
    res.render('about.hbs', {
        // Data I want to pass to
        pageTitle: 'About page'
    });
});

// /bad - send json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        error_message: "Unable to handle request"
    });
});

app.listen(3000);