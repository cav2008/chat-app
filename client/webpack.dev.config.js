const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  // entry: [
  //   // We need this line to start webpack-hot-middleware
  //   'webpack-hot-middleware/client',
  //   './index.js'
  // ],
  // This is entry way if using HtmlWebpackPlugin to make index.html file.
  entry: {
    app: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/] },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: [/node_modules/] }
    ],
  },
  resolve: {
    modules: ['node_modules'],
    // Resolve import extension to .js or .jsx if it is missing.
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    // Adding webpack-hot-middleware plugin,
    // we need to install webpack-hot-middleware to client folder.
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
