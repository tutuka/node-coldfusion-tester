'use strict'

const rp = require('request-promise')

const config = require(process.cwd() + '/cf-tester-config.json')
const display = require('./display-results')

const runTests = (tests) => {
  tests.forEach(test => {
    let options = {
      method: 'GET',
      uri: `${config.host}/${config.testRunner}`,
      qs: {
        reporter: 'JSON',
        recurse: false,
        bundles: `${config.basePath != '' ? `${config.basePath}/` : ''}${test.replace('.cfc', '')}`.replace(new RegExp('/', 'g'), '.')
      },
      json: true
    }

    rp(options)
      .then(function (results) {
          display(results)
      })
      .catch(function (err) {
          console.log(err)
      })
  })
}

module.exports = runTests
