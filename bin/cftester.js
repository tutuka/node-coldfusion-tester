'use strict'

const chokidar = require('chokidar')
const colors = require('colors')

console.log(process.cwd())

const config = require(process.cwd() + '/cf-tester-config.json')

const findTests = require('../lib/find-tests')
const runTests = require('../lib/run-tests')

console.log('\x1Bc')
console.log(`Watching files for changes on %s ...`.yellow, `${config.host}/${config.basePath}`.white.underline)

chokidar.watch('.', {
  ignored: [...config.ignored, /(^|[\/\\])\../],
  ignoreInitial: true
}).on('all', (event, path) => {
  let tests = findTests(path)
  runTests(tests)
})
