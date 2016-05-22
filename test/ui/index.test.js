"use strict";
var Eyes = require("eyes.selenium").Eyes
var _ = require("lodash")
var Q = require("q")
var Webdriver = require("selenium-webdriver")
var s = require("util").format
var canonize = require("../helpers/canonize")

var SECOND = 1000
var MINUTE = 60 * SECOND

var getSauceBrowsers = require("../../sauce-labs-browsers")
var getResolutions = function () {
  return {small: "1000x650"}
}

var browserMatrix = function (groupname) {
  var nowstr = new Date().toISOString().replace("T", " ").substr(0, 19) // => 2016-05-15 13:07:01
  return _.flatMap(getSauceBrowsers(), function (browser) {
    return _.map(getResolutions(), function (resolution) {
      return {
        browser: browser,
        res: resolution,
        slug: canonize(s("%s-%s-%s", browser.platform, browser.browserName, resolution)),
        groupname: groupname,
        buildname: canonize(groupname + "-" + (process.env.TRAVIS_JOB_NUMBER || nowstr)),
        tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER || "jonlauridsen.com"
      }
    })
  })
}

describe("jonlauridsen.com", function () {
  this.timeout(5 * MINUTE)
  browserMatrix(this.title).forEach(function (run) {
    it(s("index-%s", run.slug), function () {
      var self = this
      var webdriver = new Webdriver.Builder()
        .withCapabilities(_.merge(run.browser, {
          screenResolution: "1024x768", // maximum resolution for machine instance
          username: process.env.SAUCE_USERNAME,
          accessKey: process.env.SAUCE_ACCESS_KEY,
          build: run.buildname,
          name: self.test.title,
          tunnelIdentifier: run.tunnelIdentifier
        }))
        .usingServer(s("http://%s:%s@ondemand.saucelabs.com:80/wd/hub",
          process.env.SAUCE_USERNAME, process.env.SAUCE_ACCESS_KEY))
        .build()

      var eyes = new Eyes()
      eyes.setApiKey(process.env.EYES_KEY)
      return eyes.open(webdriver, run.groupname, self.test.title, res2Obj(run.res))
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

  return driver.get("http://localhost:4000")
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

var res2Obj = function (res) {
  var split = res.split("x")
  return {width: Number(split[0]), height: Number(split[1])}

}
