'use strict'

const colors = require('colors')
const isEmpty = require('lodash.isempty')

const displaySpecStat = (specStat, level) => {
    let status = specStat.status == 'Passed' ? 'green' : 'red'
    let message = '  '.repeat(level) + specStat.name[status]
    if (specStat.failMessage != '') {
        message += ` (${specStat.failMessage.white})`
    }
    console.log(message)

    displayError(specStat.error, level)

    displayFailOrigin(specStat.failOrigin, level)
}

const displayError = (error, level) => {
    if (!isEmpty(error)) {
        console.log()
        console.log('  '.repeat(level) + error.LocalizedMessage.white.bold)
        console.log('  '.repeat(level) + error.Detail.white)
        console.log()

        displayStackTrace(error.StackTrace, level)
    }
}

const displayStackTrace = (stackTrace, level) => {
    // only show stack of coldfusion files
    const cfStack = stackTrace.filter(obj => /\.cfc|\.cfm/.test(obj.FileName))
    cfStack.some((stackItem, index, arr) => {
        if (index >= 5 || index == arr.length - 1) {
            console.log(`${'  '.repeat(level)}...`.gray)
            console.log()
            return true
        }
        console.log(`${'  '.repeat(level)}${stackItem.FileName} - ${stackItem.LineNumber}`.gray)
    })
}

const displayFailOrigin = (failOrigin, level) => {
    if (failOrigin.length > 0) {
        console.log()
        failOrigin.some((origin, index, arr) => {
            if (index >= 5) {
                console.log(`${'  '.repeat(level)}...`.gray)
                console.log()
                return true
            }
            console.log(`${'  '.repeat(level)}${origin.TEMPLATE} - ${origin.LINE}:${origin.COLUMN}`.gray)
        })
    }
}

module.exports = displaySpecStat
