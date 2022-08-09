'use strict'

const nFetch = require('isomorphic-fetch')

const config = require(process.cwd() + '/cf-tester-config.json')
const display = require('./display-results')

const runTests = (tests) => {
  tests.forEach(test => {
	let bundle = `${config.basePath != '' ? `${config.basePath}/` : ''}${test.replace('.cfc', '')}`.replace(new RegExp('/', 'g'), '.')
	let uri = `${config.host}/${config.testRunner}?reporter=JSON&recurse=false&bundles=${bundle}`
	console.log(`Requesting test results from ${uri}`);
	nFetch(uri)
		.then( function (response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			response.json().then(data => {
				display(data);
			})
		})
		.catch( reason => {
			console.log(reason);

		})
  })
}

module.exports = runTests
