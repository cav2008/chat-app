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
import WebpackMiddleware from './middleware/webpack-middleware/webpack-middleware';
// import { ROOT_DIR, PUBLIC_DIR } from './config/config';
import socketIO from 'socket.io';

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
    this.getBuildType();
    this.makeApp();
    this.makeServer();
    this.makeWebSocket();
    this.createUserList();
    this.listen();
    this.fileServe();
  }

  /**
   * Gets the build type from argument passed by the command line npm script.
   */
  getBuildType() {
    this.buildType = process.argv[2] ? process.argv[2].split('-').join('') : 'development';
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
  /**
   * Creates the express server.
   */
  makeApp() {
    this.app = express();
  }

  /**
   * Uses the express server and creates a http server.
   */
  makeServer() {
    this.server = http.Server(this.app);
  }

  /**
   * Uses the http server to create a websocket.
   */
  makeWebSocket() {
    this.io = socketIO(this.server);
  }

  /**
   * Creating the user list array.
   */
  createUserList() {
    // Contains object: id, username, colour.
    this.userList = [];
  }

  /**
   * Gets the username from the userlist.
   * @param {string} id the socket.id
   * @return {string} Username.
   */
  getUser(id) {
    return this.userList.filter(user => user.id === id)[0];
  }

  /**
   * Server listens to port localhost:8000.
   */
  listen() {
    console.log('--- Listening on localhost:8000 ---');
    this.server.listen(8000);

    this.io.on('connection', (socket) => {
      console.log('--- Socket connected ---');

      // Add user to user list when they connect.
      socket.on('onConnect', (userData) => {
        this.userList.push({
          id: socket.id,
          username: userData.username,
          colour: userData.colour
        });

        this.io.send({
          type: 'enter',
          username: userData.username,
        });
      });

      // Listen to send() messages from clients and broadcast back to everyone else.
      socket.on('message', (msg) => {
        this.io.send({
          type: 'chat',
          message: msg,
          username: this.getUser(socket.id).username,
          colour: this.getUser(socket.id).colour,
        });
      });

      socket.on('disconnect', (reason) => {
        if (this.userList.length > 0) {
          this.io.send({
            type: 'exit',
            username: this.getUser(socket.id).username,
          });
          // Delete disconnected user from the user list.
          this.userList.splice(this.userList.findIndex((user) => user.id === socket.id), 1);
        }
      });
    });
  }

  /**
   * Serving frontend code without prebuilding it first hand.
   * Using webpackDevMiddleware to compile code when we need it.
   * This should be only used in development mode.
   * This way is just of using the webpack-dev-server.
   */
  fileServe() {
    // Pass webpack configs to the middleware.
    // this.app.use(webpackMiddleware(webpack({
    //   entry: path.join(ROOT_DIR, './client/src/app.js'),
    //   output: {
    //     path: '/',
    //     filename: 'app.js'
    //   },
    //   module: {
    //     rules: [
    //       { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/] },
    //       { test: /\.jsx$/, loader: 'babel-loader', exclude: [/node_modules/] }
    //     ]
    //   },
    //   resolve: {
    //     modules: ['node_modules']
    //   }
    // }), {
    //   publicPath: '/assets/'
    // }));
    new WebpackMiddleware(this.app, this.buildType);
  }
}

// Call createServer static method.
Server.createServer();
