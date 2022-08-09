'use strict'

const colors = require('colors')

const displaySpecStat = require('./display-spec-stat')

const displaySuiteStat = (suiteStat, level = 0) => {
    let status = suiteStat.status == 'Passed' ? 'green' : 'red'
    let message = '  '.repeat(level) + suiteStat.name[status]
    console.log(message)

    suiteStat.specStats.forEach(specStat => displaySpecStat(specStat, level + 1))
    suiteStat.suiteStats.forEach(suiteStat => displaySuiteStat(suiteStat, level + 1))
}

module.exports = displaySuiteStat
