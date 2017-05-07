'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './dist/all/bootstrap'
    },
    target: 'node',
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'backend.js',
        publicPath: '/'
    },
    plugins: [
    ],
    module: {
        loaders: [ {
            test: /\.json?$/,
            loader: 'json'
        }, {
            test: /\.css$/
        }]
    },
    postcss: [
    ]
};


// module.exports = {
//     entry: './MongoDB/bootstrap.ts',
//     output: {
//         path: path.join(__dirname, '/dist/'),
//         filename: 'backend.js',
//         publicPath: '/'
//     },
//     target: 'node',
//     resolve: {},
//     module: {
//         loaders: [
//             {
//                 test: /\.ts?$/,
//                 loader: ExtractTextPlugin.extract('awesome-typescript-loader')
//             },
//             {
//                 test: /\.json?$/,
//                 loader: 'json'
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin('typescript.[chunkhash].js', {
//             disable: false,
//             allChunks: true // extract all ts
//         })]
// };


// var webpack = require('webpack');
// var helpers = require('./helpers');

// module.exports = {
//     devtool: 'inline-source-map',
//     entry: './MongoDB/bootstrap.ts',
//     resolve: {
//         modules: [path.resolve(__dirname, '/'), 'node_modules/'],
//         descriptionFiles: ['package.json'],
//         extensions : [ '.js', '.ts']
//     },
//     target: 'node',
//     output: {
//         path: path.join(__dirname, '/dist/'),
//         filename: 'backend.js',
//         publicPath: '/'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 loaders: [
//                     {
//                         loader: 'awesome-typescript-loader'
//                     }
//                 ]
//             }
//         ]
//     },
//
//     plugins: [
//
//     ]
// }

