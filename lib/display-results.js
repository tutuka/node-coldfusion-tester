'use strict'

const displayHead = require('./display-head')
const displayBundle = require('./display-bundle')

const display = (results) => {
    displayHead(results)
    results.bundleStats.forEach(bundle => displayBundle(bundle))
}

module.exports = display
