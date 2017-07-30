/**
 * double parenthesis can be written like this:
 * var express = require('express');
 * var app = express();
 */
var app = require('express')();
var server = require('http').Server(app);
var path = require('path');

server.listen(8000);
console.log('Listening at http://localhost:8000');
