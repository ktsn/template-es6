/* eslint-env node */
const glob = require('glob');

module.exports = {
  context: __dirname,
  entry: glob.sync('./test/**/*.js'),
  output: {
    path: __dirname + '/.tmp',
    filename: 'test.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json']
  },
  watch: true,
  debug: true,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};
