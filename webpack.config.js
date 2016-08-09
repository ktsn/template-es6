/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const meta = require('./package.json')

const banner =
  `${meta.name} v${meta.version}\n` +
  `${meta.homepage}\n` +
  '\n' +
  `Copyright (c) 2016 ${meta.author}\n` +
  'Released under the MIT license\n' +
  `${meta.homepage}/blob/master/LICENSE`

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'Lib',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner, { raw: false })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.output.filename = 'bundle.min.js'
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = config
