var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack')

var config = {
  entry: path.resolve(__dirname, 'app/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: path.join(__dirname, 'app')
    }],
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel' // The module to load. "babel" is short for "babel-loader"
    }]
  },
  "presets": ["react-hmre"],
  plugins: [
    new CleanWebpackPlugin(['dist', 'build']),
    new HtmlwebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'App',
      appMountId: 'app',
      inject: false
    }),
    new CopyWebpackPlugin([
      {
        from: 'package.json'
      },
      {
        from: 'assets',
        to: 'assets'
      }
    ])
  ]
};

module.exports = config;