const browsers = [
  {
    base: "SauceLabs",
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'ui',
    build: process.env.TRAVIS_BUILD_NUMBER
  },
  {
    base: "SauceLabs",
    browserName: 'safari',
    platform: 'OS X 10.11',
    version: 'latest',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'ui',
    build: process.env.TRAVIS_BUILD_NUMBER
  },
  {
    base: "SauceLabs",
    browserName: 'firefox',
    platform: 'Linux',
    version: 'latest',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'ui',
    build: process.env.TRAVIS_BUILD_NUMBER
  },
  {
    base: "SauceLabs",
    browserName: 'MicrosoftEdge',
    platform: 'Windows 10',
    version: 'latest',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'ui',
    build: process.env.TRAVIS_BUILD_NUMBER
  },
  {
    base: "SauceLabs",
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: 'latest',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'ui',
    build: process.env.TRAVIS_BUILD_NUMBER
  }
]

module.exports = browsers
