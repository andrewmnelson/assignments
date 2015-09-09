'use strict';

var http = require('http');

var server = http.createServer(function(request, response) {
  if ("/greet" === request.url) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hi y'all");
    return response.end();
  }

  if ("POST" === request.method.toUpperCase()) {
    request.on('data', function(data) {
      console.log(data.toString());
    });
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write('{"msg": "success"}');
    return response.end();
  }

  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("umm... what?");
  return response.end();
});

server.listen(3000, function() {
  console.log('HTTP server starting');
});
