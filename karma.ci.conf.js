module.exports = function (config) {
  var customLaunchers = require("./sauce-labs-browsers")()

  config.set({
    basePath: "",
    frameworks: ["mocha", "chai", "sinon", "browserify"],

    // list of files / patterns to load in the browser
    files: [
      "./test/karma/*.js",
      {pattern: "./test/karma/*.jpg", watched: false, included: false, served: true, nocache: false}
    ],

    preprocessors: {
      "./test/karma/*.js": ["browserify"]
    },

    reporters: ["dots", "saucelabs"],

    browserify: {
      debug: true // generate source maps for easier debugging
    },

    urlRoot: "/__karma__/",
    port: 8080,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,

    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),

    autoWatch: false,
    singleRun: true,

    captureTimeout: 120000,
    browserNoActivityTimeout: 90000,

    sauceLabs: {
      testName: "karma-tests",
      build: "karma-" + process.env.TRAVIS_JOB_NUMBER,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: false
    }
  })
}
