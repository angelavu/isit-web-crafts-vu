var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './source/react-main.js',
    output: {path: __dirname, filename: 'bundle.js'},
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['env', 'stage-0', 'react']}
            }
        ]
    },
};
