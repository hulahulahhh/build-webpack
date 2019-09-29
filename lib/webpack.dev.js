const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const devConfig = {
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: '/dist',
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}
module.exports = merge(baseConfig, devConfig)