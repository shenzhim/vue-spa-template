'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';

exports.assetsPath = function (_path) {
  const assetsSubDirectory = isProduction ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path);
}

exports.cssLoaders = function (options) {
  options = options || {};
  
  let fallback = 'vue-style-loader';
  let loaders = [{
    loader: 'css-loader',
    options: {
      minimize: isProduction,
      sourceMap: options.sourceMap || false
    }
  }];
  
  if (options.type === 'css') {
    // Generate loaders for standalone style files (outside of .vue)
    fallback = 'style-loader';
    loaders.push('postcss-loader');
  }

  if (options.extract) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: fallback
    })
  } else {
    return [fallback].concat(loaders)
  }
}
