/**
 * double parenthesis can be written like this:
 * var express = require('express');
 * var app = express();
 */
// var app = require('express')();
// var server = require('http').Server(app);
// var path = require('path');

// Using ES6 way instead of node
import express from 'express';
import http from 'http';
import path from 'path';

/**
 * Main Server class listening to port 8000
 */
export default class Server {
  constructor() {
    const app = express();
    const server = http.Server(app);

    server.listen(8000);
    console.log('Listening at http://localhost:8000');
  }
}

// Make instance of Server object
const chatApp = new Server();
