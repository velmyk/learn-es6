'use strict';

const
    NODE_ENV = process.env.NODE_ENV || 'development';

const
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',

    entry: {
        app: ['babel-polyfill', './app']
    },

    output: {
        path: __dirname + '/target',
        publicPath: '/',
        filename: "[name].js"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin('[name].css', {
            allChanks: true,
            disable: process.env.NODE_ENV === 'development'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['app']
        })
    ],

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.js$/,
                include: __dirname + '/src',
                loader: 'babel',
                    query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!resolve-url!sass?sourceMap')
            }
        ]
    },

    pstcss: () => {
        [
            autoprefixer({ browsers: ['last 2 versions'] })
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions:         ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates:    ['*-loader', '*'],
        extensions:         ['', '.js']
    }

};


if (NODE_ENV == 'production') {
    module.exports.plugins.push(   
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}