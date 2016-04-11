exports.config = {
  specs: ["./test/specs/**"],
  maxInstances: 10,
  capabilities: [{browserName: "phantomjs"}],
  sync: true,

  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: "silent",
  coloredLogs: true,
  baseUrl: "http://localhost:4000",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "mocha",

  reporterOptions: {
    // If you are using the "xunit" reporter you should define the directory where
    // WebdriverIO should save all unit reports.
    outputDir: "./"
  },

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd"
  }
}
