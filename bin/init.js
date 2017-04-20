'use strict'

const prompt = require('prompt')
const fs = require('fs')
const util = require('util')

const config = require('../lib/default-config')

const schema = {
    properties: {
        host: {
            default: config.host,
            description: 'The host running your ColdFusion',
            required: true
        },
        basePath: {
            description: 'Path from the host to the root of your ColdFusion project',
            default: config.basePath
        },
        testFolder: {
            description: 'Name of the folder in your project that contains the tests',
            default: config.testFolder
        },
        testTypes: {
            description: 'List of folders inside your test folder containing different kinds of tests (e.g. integration and unit)',
            default: config.testTypes.join(',')
        },
        testRunner: {
            description: 'Path from the host to the test runner',
            default: config.testRunner
        },
        testFileSuffix: {
            description: 'Suffix to be used for test files',
            default: config.testFileSuffix
        }
    }
}

prompt.start()

prompt.get(schema, function (err, result) {
    const { host, basePath, testFolder, testTypes, testRunner, testFileSuffix } = result
    const newConfig = {
        host,
        basePath,
        testFolder,
        testTypes: testTypes.split(','),
        testRunner,
        testFileSuffix
    }
    
    fs.writeFileSync(`${process.cwd()}/cf-tester-config.json`, JSON.stringify(newConfig, null, 2), 'utf-8');
})
