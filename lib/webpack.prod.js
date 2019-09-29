const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const prodConfig = {}

module.exports = merge(baseConfig, prodConfig)