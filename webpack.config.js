'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'index.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'build/'),
    publicPath: '//localhost:8080/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  watch: true,
  devtool: 'sourcemap',
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    hot: true,
    historyApiFallback: '/',
    publicPath: '//localhost:8080/',
    stats: {colors: true}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
