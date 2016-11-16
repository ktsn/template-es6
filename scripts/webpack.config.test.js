const path = require('path')
const glob = require('glob')

module.exports = {
  entry: glob.sync(path.resolve(__dirname, '../test/**/*.js')),
  output: {
    path: path.resolve(__dirname, '../.tmp'),
    filename: 'test.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  devtool: 'source-map'
}
