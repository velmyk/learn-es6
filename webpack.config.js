'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',

  entry: {
    app: './app'
  },

  output: {
    path:     __dirname + '/target/js',
    publicPath: '/js/',  //   /js/app.js
    filename: "[name].js"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    new webpack.NoErrorsPlugin()
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
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}