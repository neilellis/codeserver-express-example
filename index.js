var vertx = require('vertx');

// Inspired from Sinatra / Express
var rm = new vertx.RouteMatcher();

rm.get('/details/:user/:id', function(req) {
  req.response.end("User: " + req.params().get('user') + " ID: " + req.params().get('id'))
});

vertx.createHttpServer().requestHandler(rm).listen(8080);
