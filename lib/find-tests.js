'use strict'

const fs = require('fs');

const config = require(process.cwd() + '/cf-tester-config.json')

const findTests = (forFile) => {
  let tests = []
  let normalizedForFile = forFile.replace(/\\/g,"/")
  let parts = normalizedForFile.split('/')

  // if the file is in the folder containing tests, the file is the test
  if (parts[0] == config.testFolder) {
    tests.push(forFile)
  } else {

    // if the file is outside the test folder, we look up its relevant test files
    // we look for files with the same path starting from the test type folders
    // with or without suffix like 'Spec'.
    config.testTypes.forEach(type => {
      const filePath = `${process.cwd()}/${config.testFolder}/${type}/${forFile.replace('.cfc', `${config.testFileSuffix}.cfc`)}`
      if (fs.existsSync(filePath)) {
        tests.push(`${config.testFolder}/${type}/${forFile.replace('.cfc', `${config.testFileSuffix}.cfc`)}`)
      }
    })
  }

  return tests
}

module.exports = findTests
