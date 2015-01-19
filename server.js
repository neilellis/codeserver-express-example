var vertx = require('vertx');
var server = vertx.createHttpServer();

var routeMatcher = new vertx.RouteMatcher();

routeMatcher.get('/dogs', function(req) {
    req.response().end('You requested dogs');
});

routeMatcher.get('/cats', function(req) {
    req.response().end('You requested cats');
});

server.requestHandler(routeMatcher).listen(8888);
