'use strict'

const colors = require('colors')

const displaySpecStat = require('./display-spec-stat')

const displaySuiteStat = (suiteStat, level = 0) => {
    let status = suiteStat.STATUS == 'Passed' ? 'green' : 'red'
    let message = '  '.repeat(level) + suiteStat.NAME[status]
    console.log(message)
    
    suiteStat.SPECSTATS.forEach(specStat => displaySpecStat(specStat, level + 1))
    suiteStat.SUITESTATS.forEach(suiteStat => displaySuiteStat(suiteStat, level + 1))
}

module.exports = displaySuiteStat
