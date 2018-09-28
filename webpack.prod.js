const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HTMLWebPackPlugin({
      title: 'PROD',
      template: 'public/index.html'
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});
