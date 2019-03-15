module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!*', '!coverage/**/*', '!static/sw.js'],
  coverageReporters: ['text', 'html', 'lcov'],
  setupFiles: ['./test/jest.overrides.js']
}
