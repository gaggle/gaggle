"use strict";
var Eyes = require("eyes.selenium").Eyes
var _ = require("lodash")
var Q = require("q")
var Webdriver = require("selenium-webdriver")
var s = require("util").format

var SECOND = 1000
var MINUTE = 60 * SECOND

var getSauceBrowsers = require("../../sauce-labs-browsers")
var getResolutions = function () {
  return {
    small: {width: 1000, height: 650}
  }
}

var canonize = function (s) {
  // TODO: Obvious refactor is obvious
  s = s.toLowerCase()
  s = s.replace(/ /g, "-")
  s = s.replace(/\./g, "-")
  s = s.replace(/\(/g, "")
  s = s.replace(/\)/g, "")
  return s
}

const title = "jonlauridsen.com"
describe(title, function () {
  var nowstr = new Date().toISOString().replace("T", " ").substr(0, 19) // => 2016-05-15 13:07:01
  this.timeout(5 * MINUTE)
  _.map(getSauceBrowsers(), function (browser) {
    _.map(getResolutions(), function (resolution) {
      var slug = canonize(s("%s-%s-%s", browser.platform, browser.browserName,
        s("%sx%s", resolution.width, resolution.height)))
      var buildName = canonize(title + "-" + (process.env.TRAVIS_JOB_NUMBER || nowstr))
      it(slug, function () {
        var webdriver = new Webdriver.Builder()
          .withCapabilities(_.merge(browser, {
            screenResolution: "1024x768", // maximum resolution for machine instance
            username: process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            build: buildName,
            name: this.test.title,
            tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER || "jonlauridsen.com" // must match sauce-connect script
          }))
          .usingServer(s("http://%s:%s@ondemand.saucelabs.com:80/wd/hub",
            process.env.SAUCE_USERNAME, process.env.SAUCE_ACCESS_KEY))
          .build()

        var eyes = new Eyes()
        eyes.setApiKey(process.env.EYES_KEY)
        return eyes.open(webdriver, title, slug, resolution)
          .then(function (driver) {
            return eyesOnIndexTest.bind(this)(driver, eyes)
              .finally(function () {
                driver.quit()
                eyes.close()
              })
          })
      })
    })
  })
})

var eyesOnIndexTest = function (driver, eyes) {
  var waitForNoTransition = function () {
    return Q.delay(1000)
      .then(function () {
        return driver.wait(function () {
          return driver.executeScript("return buffer.transitioning")
            .then(function (val) {
              return val == false
            })
        }, 2 * MINUTE)
      })
  }

  return driver.get("http://jonlauridsen.com")
    .then(waitForNoTransition)
    .then(function () {
      return driver.executeScript("timeManager.stop(); timeManager.set(new Date(1997, 7, 29, 2, 14, 0))")
    })
    .then(waitForNoTransition)
    .then(function () {
      return driver.executeScript("themeManager.set('clouds')")
    })
    .then(waitForNoTransition)
    .then(function () {
      return eyes.checkWindow("index")
    })
}
