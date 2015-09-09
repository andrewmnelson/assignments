'use strict';

module.exports = exports = function(request, response) {
  if ("/" === request.url) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    return response.end();
  }
  var requestPath = request.url.split("/");
  if ("greet" === requestPath[1]) {
    var requestName = "";
    if ("POST" === request.method.toUpperCase()) {
      request.on('data', function(data) {
        requestName = JSON.parse(data).name;
      });
      request.on('end', function() {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello" + (requestName? (" " + requestName) : ""));
        return response.end();
      })
    }
    else {
      if (requestPath[2] && requestPath[2].length) {
        requestName = requestPath[2];
      }
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("hello" + (requestName? (" " + requestName) : ""));
      return response.end();
    }
  }

  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("umm... what?");
  return response.end();
};
