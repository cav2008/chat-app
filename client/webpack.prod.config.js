const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.jsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/] },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: [/node_modules/] }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}