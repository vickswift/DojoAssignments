// Require the Express Module
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');

var route = require('./routes/index.js')(app);

// Use native promises
mongoose.Promise = global.Promise;

// Setting our Server to Listen on Port: 8000
app.listen(port, function() {
    console.log("listening on port 8000");
})
