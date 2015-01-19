var server = vertx.createHttpServer();

server.requestHandler(function(request) {

  var str = '';
  request.headers().forEach(function(key, value) {
    str = str.concat(key, ': ', value, '\n');
  });

  request.response.end(str);

}).listen(8080, 'localhost');
