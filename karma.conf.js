"use strict";
let browsers = ["PhantomJS"]
let customLaunchers = undefined
let reporters = ["dots", "coverage"]
let concurrency = Infinity

const SECOND = 1000
const MINUTE = 60 * SECOND

module.exports = function (config) {
  config.set({
    basePath: "",
    customLaunchers,
    browsers,
    frameworks: ["mocha", "sinon-chai", "browserify"],
    files: [
      "test/frontend/**/*.js",
      "themes/simplicity-itself/**/*.js"
    ],
    exclude: [
      "themes/simplicity-itself/scripts/*.js"
    ],

    preprocessors: {
      "test/**/*.js": ["browserify"],
      "themes/**/*.js": ["browserify"]
    },
    reporters,
    coverageReporter: {
      reporters: [
        {"type": "text"},
        {"type": "json"},
        {"type": "lcov"}
      ]
    },
    port: 9876,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    singleRun: true,
    concurrency,

    // Kept getting "Disconnected, because no message in 10000 ms." from Firefox
    browserDisconnectTimeout: 10 * SECOND, // default 2000
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: MINUTE,
    captureTimeout: 2 * MINUTE,

    // Extensions
    browserify: {
      debug: true,
      transform: [
        ["browserify-istanbul", {instrumenterConfig: {embedSource: true}}]
      ]
    }
  })
}
