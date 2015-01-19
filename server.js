var vertx = require('vertx');
var server = vertx.createHttpServer();

var routeMatcher = new vertx.RouteMatcher();

routeMatcher.get('/hello', function(req) {
    req.response().end("Hello World");
});

server.requestHandler(routeMatcher).listen(8080);
