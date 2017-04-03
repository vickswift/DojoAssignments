var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 5000,
    app      = express();

// Setting our client/static/bower Folder Directory
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())

// Import/require path to our db and have our models preload for us
require("./server/config/mongoose.js");
//Import/require function in our routes.js file and pass it express app instance
require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
