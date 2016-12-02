const slBrowsers = require("./saucelabs-browsers")
const is_travis = 'TRAVIS' in process.env && 'CI' in process.env;

exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  specs: [
    './test/ui/*.js'
  ],
  maxInstances: 40,
  capabilities: is_travis ? slBrowsers : [{browserName: 'phantomjs'}],
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
  services: [is_travis ? 'sauce' : 'phantomjs'],
  framework: 'mocha',
  reporters: ['dot'],
  reporterOptions: {
    outputDir: './'
  },
  mochaOpts: {
    ui: 'bdd'
  }
}
