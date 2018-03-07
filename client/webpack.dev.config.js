const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
  // magic link to see what is in the virtual directory localhost:8000/webpack-dev-server
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',
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
          }, // compiles .css files. Need source map for resolve-url-loader.
          { loader: 'resolve-url-loader' }, // Sass does not provide url rewriting therefore all files are relative path to where it is used in the js. This makes it that url() in sass is relative to it's own file.
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          }, // compiles .scss files. Need source map for resolve-url-loader.
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
    // We need to copy static assets to be able to use file-loader.
    new CopyWebpackPlugin([{
      from: 'assets/',
      to: 'assets/',
    }]),
  ],
};
