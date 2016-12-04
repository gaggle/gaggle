module.exports = function (config) {
  config.set({
    basePath: "",
    browsers: ["PhantomJS"],
    frameworks: ["mocha", "sinon-chai", "browserify"],
    files: [
      "test/frontend/**/*.js",
      "themes/simplicity-itself/**/*.js"
    ],
    preprocessors: {
      "test/**/*.js": ["browserify"],
      "themes/**/*.js": ["browserify"]
    },
    reporters: ["dots", "coverage"],
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
    concurrency: Infinity,
    browserify: {
      debug: true,
      transform: [
        ["browserify-istanbul", {instrumenterConfig: {embedSource: true}}]
      ]
    }
  })
}
