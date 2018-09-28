const merge = require('webpack-merge');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 2099,
    compress: true
  },
  plugins: [
    new HTMLWebPackPlugin({
      title: 'DEV',
      template: 'public/index.html'
    })
  ]
});
