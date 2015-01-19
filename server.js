var vertx = require('vertx');

// Inspired from Sinatra / Express
var rm = new vertx.RouteMatcher();

// Extract the params from the uri
rm.get('/details/:user/:id', function(req) {
  req.response.end("User: " + req.params().get('user') + " ID: " + req.params().get('id'))
});

vertx.createHttpServer().requestHandler(rm).listen(8080);
