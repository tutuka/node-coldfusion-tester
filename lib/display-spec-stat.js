'use strict'

const colors = require('colors')

const displaySpecStat = (specStat, level) => {
    let status = specStat.STATUS == 'Passed' ? 'green' : 'red'
    let message = '  '.repeat(level) + specStat.NAME[status]
    if (specStat.FAILMESSAGE != '') {
        message += ` (${specStat.FAILMESSAGE.white})`
    }
    console.log(message)

    if (specStat.FAILMESSAGE != '') {
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
