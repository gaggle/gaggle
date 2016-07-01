"use strict";
const Eyes = require("eyes.selenium").Eyes
const _ = require("lodash")
const Q = require("q")
const Webdriver = require("selenium-webdriver")
const s = require("util").format
const canonize = require("../helpers/canonize")

const SECOND = 1000
const MINUTE = 60 * SECOND

const getSauceBrowsers = require("../../sauce-labs-browsers")
const getResolutions = () => ({small: "800x600"})

const browserMatrix = (groupname) => {
  const nowstr = new Date().toISOString().replace("T", " ").substr(0, 19) // => 2016-05-15 13:07:01
  return _.flatMap(getSauceBrowsers(), (browser) => {
    return _.map(getResolutions(), (resolution) => ({
      browser: browser,
      res: resolution,
      slug: canonize(s("%s-%s-%s", browser.platform, browser.browserName, resolution)),
      groupname: groupname,
      buildname: canonize(s("%s-%s", groupname, process.env.TRAVIS_JOB_NUMBER || nowstr)),
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER || "development"
    }))
  })
}

describe("UI", function () {
  this.timeout(5 * MINUTE)
  browserMatrix(this.title).forEach((run) => {
    it(s("index-%s", run.slug), function () {
      const webdriver = new Webdriver.Builder()
        .withCapabilities(_.merge(run.browser, {
          screenResolution: "1024x768", // maximum resolution for machine instance
          username: process.env.SAUCE_USERNAME,
          accessKey: process.env.SAUCE_ACCESS_KEY,
          build: run.buildname,
          name: this.test.title,
          tunnelIdentifier: run.tunnelIdentifier
        }))
        .usingServer(s("http://%s:%s@ondemand.saucelabs.com:80/wd/hub",
          process.env.SAUCE_USERNAME, process.env.SAUCE_ACCESS_KEY))
        .build()

      const eyes = new Eyes()
      eyes.setApiKey(process.env.EYES_KEY)
      eyes.setBatch(run.buildname, run.buildname)
      return eyes.open(webdriver, run.groupname, this.test.title, res2Obj(run.res))
        .then((driver) => {
          return eyesOnIndexTest.bind(this)(driver, eyes)
            .finally(() => {
              driver.quit()
              eyes.close()
            })
        })
    })
  })
})

const eyesOnIndexTest = (driver, eyes) => {
  const waitForNoTransition = () => {
    return Q.delay(1000)
      .then(() => {
        return driver.wait(() => {
          return driver.executeScript("return buffer.transitioning")
            .then((val) => {
              return val == false
            })
        }, MINUTE)
      })
  }

  return driver.get("http://localhost:4000")
    .then(waitForNoTransition)
    .then(() => driver.executeScript("timeManager.stop(); timeManager.set(new Date(1997, 7, 29, 2, 14, 0))"))
    .then(waitForNoTransition)
    .then(() => driver.executeScript("themeManager.set('clouds')"))
    .then(waitForNoTransition)
    .then(() => eyes.checkWindow("index"))
}

const res2Obj = (res) => {
  const split = res.split("x")
  return {width: Number(split[0]), height: Number(split[1])}
}
