module.exports = function (config) {
  var customLaunchers = require("./sauce-labs-browsers")()

  config.set({
    basePath: "",
    frameworks: ["mocha", "chai", "sinon", "browserify"],

    // list of files / patterns to load in the browser
    files: [
      "./test/*.js",
      {pattern: "./test/*.jpg", watched: false, included: false, served: true, nocache: false}
    ],

    exclude: [
      "./themes/microfolio/source/js/index.js"
    ],

    preprocessors: {
      "./test/*.js": ["browserify"],
      "./themes/**/*.js": ["browserify"]
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
      testName: "jonlauridsen.com (gaggle)",
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      startConnect: false
    }
  })
}
