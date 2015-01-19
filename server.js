var vertx = require('vertx');
var server = vertx.createHttpServer();

var routeMatcher = new vertx.RouteMatcher();

routeMatcher.get('/date', function(req) {
    req.response().end(""+new Date());
});

server.requestHandler(routeMatcher).listen(8080);
