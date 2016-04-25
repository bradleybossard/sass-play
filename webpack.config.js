// webpack.config.js
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/index'], // .js after index is optional
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: '.',
    host: '0.0.0.0',
    port: 8000
  },  
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  }
}