const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/] },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: [/node_modules/] }
    ]
  },
  resolve: {
    modules: ['node_modules']
  }
}
