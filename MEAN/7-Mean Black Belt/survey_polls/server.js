var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 3000,
    app      = express();

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())

//import routes
require('./server/config/mongoose.js')
var routes_setter = require('./server/config/routes.js')
routes_setter(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
