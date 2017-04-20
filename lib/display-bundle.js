'use strict'

const Table = require('cli-table')
const colors = require('colors')

const displaySuiteStat = require('./display-suite-stat')

const displayBundle = (bundle) => {
    console.log()
    console.log('Ran tests from %s ...'.yellow, bundle.PATH.white)
    console.log()
    bundle.SUITESTATS.forEach(suiteStat => displaySuiteStat(suiteStat))
}

module.exports = displayBundle
