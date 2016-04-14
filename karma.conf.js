// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'browserify'],

    // list of files / patterns to load in the browser
    files: [
      './test/*.js',
      './themes/**/*.js'
    ],

    preprocessors: {
      './test/*.js': ['browserify'],
      './themes/**/*.js': ['browserify']
    },

    reporters: ['dots', 'coverage', 'coveralls'],

    browserify: {
      debug: true, // generate source maps for easier debugging
      transform: ['browserify-istanbul']
    },

    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: '.coverage'}
      ]
    },

    urlRoot: '/__karma__/',
    port: 8080,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    autoWatch: false,
    singleRun: true,

    // Consider browser as dead if no response for 5 sec
    browserNoActivityTimeout: 5000
  })
}
