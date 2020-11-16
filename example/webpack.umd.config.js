const merge = require('lodash.merge')
const webpackConfig = require('./webpack.config')

module.exports = [
  merge({}, webpackConfig, {
    name: '1',
    mode: 'development',
    output: {
      filename: 'show-it.js',
      libraryTarget: 'umd'
    }
  }),
  merge({}, webpackConfig, {
    name: '2',
    mode: 'production',
    output: {
      filename: 'show-it.min.js',
      libraryTarget: 'umd'
    }
  })
]
