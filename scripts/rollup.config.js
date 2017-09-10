const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const meta = require('../package.json')

const banner = `/*!
 * ${meta.name} v${meta.version}
 * ${meta.homepage}
 *
 * @license
 * Copyright (c) 2017 ${meta.author}
 * Released under the MIT license
 * ${meta.homepage}/blob/master/LICENSE
 */`

const name = 'Lib'

const plugins = [
  babel({
    exclude: 'node_modules/**'
  })
]
if (process.env.NODE_ENV) {
  plugins.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  )
}

module.exports = {
  input: 'src/index.js',
  output: {
    name,
    banner
  },
  plugins
}
