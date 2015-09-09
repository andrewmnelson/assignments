'use strict';

var http = require("http");
var serverFunc = require("./greet_http");

var server = http.createServer(serverFunc);
server.listen(3000);
