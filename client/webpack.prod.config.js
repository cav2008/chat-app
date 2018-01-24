const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/] },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: [/node_modules/] },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // create styles node from JS strings.
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, // compiles .css files.
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          }, // compiles .scss files.
        ],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    // Copy assets files. The fonts are already copied over in production however.
    new CopyWebpackPlugin([{
      from: 'assets/',
      to: 'assets/',
    }]),
  ],
};
