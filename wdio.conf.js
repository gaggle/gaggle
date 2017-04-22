"use strict";
const slBrowsers = require("./saucelabs-browsers")

const SECOND = 1000
const MINUTE = 60 * SECOND

let capabilities = [{browserName: "phantomjs"}]
let maxInstances = 40
if (process.env.SAUCE_USERNAME) {
  const browsers = slBrowsers({
    "name-prefix": "ui",
    tunnel: process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER
  })

  capabilities = Object.keys(browsers).map((key) => browsers[key])
  maxInstances = 5
}

exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  specs: ["./test/ui/**/*.js"],
  maxInstances,
  capabilities,
  sync: true,
  logLevel: "error",
  coloredLogs: true,
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: "./errorShots/",
  // Set a base URL in order to shorten url command calls.
  baseUrl: "http://localhost:4000",
  waitforTimeout: 30 * SECOND,
  connectionRetryTimeout: 6 * MINUTE,
  connectionRetryCount: 3,
  services: [process.env.SAUCE_USERNAME ? "sauce" : "phantomjs"],
  framework: "mocha",
  reporters: ["dot"],
  reporterOptions: {
    outputDir: "./"
  },
  mochaOpts: {
    timeout: 2 * MINUTE,
    ui: "bdd"
  }
}
