const slBrowsers = require("./saucelabs-browsers")

let capabilities = [{browserName: 'phantomjs'}]
let maxInstances = 40
if (process.env.SAUCE_USERNAME) {
  const browsers = slBrowsers({
    "name-prefix": "ui",
    tunnel: process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER
  })

  capabilities = Object.keys(browsers).map((key) => {
    return browsers[key]
  })
  maxInstances = 5
}

exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  specs: ['./test/ui/*.js'],
  maxInstances: maxInstances,
  capabilities: capabilities,
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './errorShots/',
  // Set a base URL in order to shorten url command calls.
  baseUrl: 'http://localhost:4000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [process.env.SAUCE_USERNAME ? 'sauce' : 'phantomjs'],
  framework: 'mocha',
  reporters: ['dot'],
  reporterOptions: {
    outputDir: './'
  },
  mochaOpts: {
    ui: 'bdd'
  }
}
