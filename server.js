var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'), 
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

app.use( express.static( path.join( root, 'client' )));
// app.use( express.static( path.join( root, 'client/static/partials' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );

require('./server/config/mongoose.js');
// Root Request
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
