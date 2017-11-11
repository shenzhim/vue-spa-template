'use strict'
const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const path = require('path')
const chalk = require('chalk')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')
const port = process.env.PORT || config.dev.port
const app = express()
const compiler = webpack(webpackConfig)

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
app.use(hotMiddleware)


const proxyTable = config.dev.proxyTable
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})


app.use(require('connect-history-api-fallback')())


const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})
app.use(devMiddleware)


const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))


const portfinder = require('portfinder')
devMiddleware.waitUntilValid(() => {
  portfinder.basePort = port
  portfinder.getPort((err, port) => {
    if (!err) {
      process.env.PORT = port
      console.log(chalk.cyan(' server listening at port: ' + port + '\n'))
      app.listen(port)  
    }
  })
})
