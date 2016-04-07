define({
  environments: [ { browserName: 'phantomjs' } ],
  functionalSuites: [ 'tests/functional/index' ],
  // A regular expression matching URLs to files that should not be included in code coverage analysis
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
