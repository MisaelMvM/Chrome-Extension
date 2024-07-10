const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './popup.js',
    background: './background.js',
    content: './content.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: "manifest.json" },
        { from: "popup.html", to: "popup.html" },
        { from: "options.html", to: "options.html" },
        { from: "icon16.png", to: "icon16.png" },
        { from: "icon48.png", to: "icon48.png" },
        { from: "icon128.png", to: "icon128.png" },
        { from: "node_modules/react/umd/react.production.min.js", to: "react.production.min.js" },
        { from: "node_modules/react-dom/umd/react-dom.production.min.js", to: "react-dom.production.min.js" }
      ]
    })
  ]
};
