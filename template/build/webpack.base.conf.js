'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const WebPWebpackPlugin = require('webp-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[hash:7].js'),
    publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.css', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: utils.cssLoaders({
              extract: isProduction
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.css$/,
        use: utils.cssLoaders({
          type: 'css',
          extract: isProduction
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new WebPWebpackPlugin({
      match: /(jpe?g|png)$/,
      limit: 5000,
      webp: {
        quality: 60
      }
    })
  ]
}
