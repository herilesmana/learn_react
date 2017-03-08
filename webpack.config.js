var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './resources/assets/js/myapp.js',
    output: { path: __dirname, filename: 'public/assets/js/myapp.js'},
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
