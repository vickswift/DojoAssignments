// Require the Express Module
var express = require('express');
// Require the Mongoose Module
var mongoose = require('mongoose');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
// If the db dont exist, mongoose will automatically create it for you. 
mongoose.connect('mongodb://localhost/mongoose_dashboard');

//Code refactored: Passing our express app instance to index.js file in route folder
var route = require('./routes/index.js')(app);

// Use native promises
mongoose.Promise = global.Promise;




// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
