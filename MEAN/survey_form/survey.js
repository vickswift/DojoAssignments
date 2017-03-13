// require express
var express = require("express");
//Session module
var session = require('express-session');
// path module --
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(session({secret: 'this-is-no-secret'}));

//Code refactored: Passing our express app instance to index.js file in route folder
var route = require('./routes/index.js')(app);


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
