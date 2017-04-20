'use strict'

const Table = require('cli-table')
const colors = require('colors')

const displayHead = (results) => {
    let borderColor = 'green'
    if (results.totalFail > 0 || results.totalError > 0) borderColor = 'red'

    const table = new Table({
        head: ['Time taken'.white, 'Total #'.blue, 'Passed #'.green, 'Failed #'.red, 'Error #'.red, 'skipped #'.blue],
        style: {
            border: [borderColor]
        }
    })

    table.push([
        results.totalDuration + ' ms', results.totalSpecs, results.totalPass, results.totalFail, results.totalError, results.totalSkipped
    ])
    
    console.log()
    console.log(table.toString())
}

module.exports = displayHead
