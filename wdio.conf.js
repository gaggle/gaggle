"use strict";
const SECOND = 1000
const MINUTE = 60 * SECOND

let capabilities = [{browserName: "phantomjs"}]
let maxInstances = 40

exports.config = {
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
  waitforTimeout: 10 * SECOND,
  connectionRetryTimeout: 90 * SECOND,
  connectionRetryCount: 3,
  services: ["phantomjs"],
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
