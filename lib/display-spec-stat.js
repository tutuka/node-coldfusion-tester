'use strict'

const colors = require('colors')
const isEmpty = require('lodash.isempty')

const displaySpecStat = (specStat, level) => {
    let status = specStat.STATUS == 'Passed' ? 'green' : 'red'
    let message = '  '.repeat(level) + specStat.NAME[status]
    if (specStat.FAILMESSAGE != '') {
        message += ` (${specStat.FAILMESSAGE.white})`
    }
    console.log(message)

    if (!isEmpty(specStat.ERROR)) {
        console.log()
        console.log('  '.repeat(level) + specStat.ERROR.LocalizedMessage.white.bold)
        console.log('  '.repeat(level) + specStat.ERROR.Detail.white)        
        console.log()        
    }

    if (specStat.FAILORIGIN.length > 0) {
        console.log()
        specStat.FAILORIGIN.some((origin, index, arr) => {
            if (index >= 5) {
                console.log(`${'  '.repeat(level)}...`.gray)
                return true
            }
            console.log(`${'  '.repeat(level)}${origin.TEMPLATE} - ${origin.LINE}:${origin.COLUMN}`.gray)
        })
    }
    console.log()
}

module.exports = displaySpecStat
