var path = require('path');
// var webpack = require('webpack');
module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  // mode: "development",
  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },


  // "webpack-dev-server": "^3.1.9" için server ayarları.
  devServer: {
    port: 3200,
    index: "index.html"
  }
};