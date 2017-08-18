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
import routes from './routes';

/**
 * Main Server class listening to port 8000.
 * We missed out 'export default' key words because we do not want other modules to be able
 * to import this class.
 * We want to limit the potential of another Server instance being created. Therefore you can not
 * export the Server class.
 */
class Server {
  /**
   * Static variable belong to the class rather than the instance.
   * The value is the same for every instance of it.
   * For example it is good for counting the amount of times the class has been instantiated.
   * Need to use Babel preset stage-0, presets include are a set of certain plugins.
   * We can install a single Babel plugin or a set of plugins called preset.
   */
  static instance = null;

  constructor() {
    this.makeApp();
    this.makeServer();
    this.listen();
  }

  /**
   * Create only a single instance of the server. (singleton design pattern)
   * Static method, therefore it is belong to the class and not to the instance
   * of it. Call it straight without making instance of it.
   * Since we only use the Server class to create a server it make more sense
   * for it to be a static method.
   * This is NOT a fully singleton design pattern because you can still add 'new Server()' to
   * create a new server instance in this file.
   */
  static createServer() {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

   // We break down the contructor into different methods because it can get large later on.
  makeApp() {
    this.app = express();
  }

  makeServer() {
    this.server = http.Server(this.app);
  }

  listen() {
    this.app.use('/', routes);

    this.server.listen(8000);
  }
}

// Call createServer static method
Server.createServer();
