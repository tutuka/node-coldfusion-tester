'use strict'

const colors = require('colors')

const displaySpecStat = (specStat, level) => {
    let status = specStat.STATUS == 'Passed' ? 'green' : 'red'
    console.log('  '.repeat(level) + specStat.NAME[status])
    console.log()
}

module.exports = displaySpecStat
