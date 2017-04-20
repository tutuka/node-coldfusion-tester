'use strict'

const config = require(process.cwd() + '/cf-tester-config')

const findTests = (forFile) => {
  let tests = []
  let parts = forFile.split('/')

  // if the file is in the folder containing tests, the file is the test
  if (parts[0] == config.testFolder) {
    tests.push(forFile)
  }

  // if the file is outside the test folder, we look up its relevant test files
  // we look for files with the same path starting from the test type folders
  // with or without suffix like 'Spec'.
  

  return tests
}

module.exports = findTests
