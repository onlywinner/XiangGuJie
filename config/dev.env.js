var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var proxy = require('http-proxy-middleware');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {'/h51701/public/api/': {target: 'http://localhost', changeOrigin: true}}  
})
