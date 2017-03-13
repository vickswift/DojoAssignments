// require express, path, body-parser
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// create the express app
var app = express();

app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})




// this selects our port and listens
// note that we're now storing our app.listen within
// a variable called server. this is important!!
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
// this is a new line we're adding AFTER our server listener
// take special note how we're passing the server
// variable. unless we have the server variable, this line will not work!!
var io = require('socket.io').listen(server);

//listen to connection event from the client side
io.sockets.on('connection', function (socket){
	//server listens to "posting_form" event
 	socket.on("posting_form", function (data){
    console.log(data);
 		//generate a random number
 		var random_number = Math.floor((Math.random() * 1000) + 1);
	  //will emit the data to the client
	  socket.emit('updated_message', {response: data});
		socket.emit('random_number', {response: random_number});
	})
})
