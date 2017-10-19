'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const axios = require('axios')
const appData = require('../data.json')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
// 后端代理请求
var apiRoutes = express.Router()
// 获取用户数据接口
var userInfo = appData.userInfo
apiRoutes.get('/login',function (req, res) {
  // 管理员(admin)经销商（agency）/客服(staff)
  // console.log('req.query=', req.query)
  if (req.query.userName == userInfo.admin.userName && req.query.passWord == userInfo.admin.passWord) {
    res.json({
      code: 1,
      message: '登录成功',
      userInfo: userInfo.admin
    })
  } else if (req.query.userName == userInfo.agency.userName && req.query.passWord == userInfo.agency.passWord) {
    res.json({
      code: 2,
      message: '登录成功',
      userInfo: userInfo.agency
    })
  } else if (req.query.userName == userInfo.staff.userName && req.query.passWord == userInfo.staff.passWord) {
    res.json({
      code: 3,
      message: '登录成功',
      userInfo: userInfo.staff
    })
  } else {
    res.json({
      code: -1,
      message: '登录失败'
    })
  }
})
// 注销接口
var logout = appData.logout
apiRoutes.get('/logout',function (req, res) {
  // 管理员(admin)经销商（agency）/客服(staff)
  // console.log('req.query=', req.query)
  if (req.query.code == logout.code) {
    res.json({
      code: -2,
      message: '已注销'
    })
  }
})
// 获取表格数据接口
apiRoutes.get('/getPage', function(req, res){
  if(req.query.pageNum == 1){
    res.json({
      code: 0,
      columns: appData.tableData.columns,
      data: appData.tableData.pages1.data,
      total: appData.tableData.totals,
      pageSize: appData.tableData.pages3.pageSize,
      pageNum: appData.tableData.pages3.pageNum
    })
  } else if (req.query.pageNum == 2) {
    res.json({
      code: 0,
      columns: appData.tableData.columns,
      data: appData.tableData.pages2.data,
      total: appData.tableData.totals,
      pageSize: appData.tableData.pages3.pageSize,
      pageNum: appData.tableData.pages3.pageNum
    })
  } else if (req.query.pageNum == 3) {
    res.json({
      code: 0,
      columns: appData.tableData.columns,
      data: appData.tableData.pages3.data,
      total: appData.tableData.totals,
      pageSize: appData.tableData.pages3.pageSize,
      pageNum: appData.tableData.pages3.pageNum
    })
  }
})

app.use('/mock',apiRoutes)

const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  const options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
