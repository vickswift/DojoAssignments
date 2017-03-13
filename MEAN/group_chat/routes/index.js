module.exports = function Route(app, server){
	var io = require('socket.io').listen(server)

	io.sockets.on('connection', function (socket) {
		socket.on("push_button", function (data){
      console.log(data);


		})
		// //resetting the counter into 0
		// socket.on("reset_counter", function (data){
		// 	counter = 0;
		// 	io.emit('reset_response', {response: counter});
		// })
	})

	// root route to render the index.ejs view
	app.get('/', function(req, res) {
	 res.render("index");
	})
};
