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

  /**
   * Create only a single instance of the server. (singleton design pattern)
   * Static method, therefore it is belong to the class and not to the instance
   * of it. Call it straight without making instance of it.
   * Since we only use the Server class to create a server it make more sense
   * for it to be a static method.
   */
  static createServer() {
    if (!this.app) {
      this.app = express();
      this.server = http.Server(this.app);

      this.server.listen(8000);
      console.log('Listening at http://localhost:8000');
    }
  }
}

// Make instance of Server object
Server.createServer();
