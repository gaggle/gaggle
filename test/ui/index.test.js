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
const getResolutions = () => ({small: "1000x650"})

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

browserMatrix("UI").forEach((run) => {
  describe(s("UI-%s", run.slug), function () {
    this.timeout(5 * MINUTE)
    it(s("index-%s", run.slug), function () {
      const webdriver = new Webdriver.Builder()
        .withCapabilities({browserName: "phantomjs"})
        .build();

      const eyes = new Eyes()
      eyes.setApiKey("foo")

      //return Q.delay(2000)  // Use this line instead of eyes.open and all the tests pass
      return eyes.open(webdriver, run.groupname, this.test.title)
        .then(() => {
          console.log("Running test:", this.test.title)
        })
    })
  })
})
