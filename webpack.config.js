"use strict";

const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

// call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed;
  

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss?$/,
        include: path.join(__dirname, 'src', 'styles'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      actions: path.join(__dirname, 'src', 'actions'),
      store: path.join(__dirname, 'src', 'store.js'),
      utils: path.join(__dirname, 'src', 'utils'),
    }
  },
  plugins: [ 
    new webpack.DefinePlugin(envKeys)
  ],
  devServer: {
    contentBase: "./dist",
    port: 8080,
    host: "127.0.0.1",
    historyApiFallback: true,
  }
}