const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.join(__dirname, "src", "public", "js", "main.jsx"),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
          loader:'babel-loader',
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "public", "views", "index.html")
      })
  ]
};

module.exports = config;
