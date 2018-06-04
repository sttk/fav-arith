'use strict';

var path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'fav.arith.js',
    library: ['fav', 'arith'],
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'web'),
  },
};
