const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: [
    // We need this line to start webpack-hot-middleware
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
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
  },
  plugins: [
    // Adding webpack-hot-middleware plugin, we need to install webpack-hot-middleware to client folder.
    new webpack.HotModuleReplacementPlugin()
  ]
}
