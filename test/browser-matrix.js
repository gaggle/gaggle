"use strict";
const _ = require("lodash")
const canonize = require("./canonize")
const getSauceBrowsers = require("../sauce-labs-browsers")

const getResolutions = () => ({small: "800x600"})

module.exports = (groupname = null) => {
  const nowstr = new Date().toISOString().replace("T", " ").substr(0, 19) // => 2016-05-15 13:07:01
  var buildname = process.env.TRAVIS_JOB_NUMBER || nowstr
  if (groupname) buildname = `${groupname}-${buildname}`
  return _.flatMap(getSauceBrowsers(), (browser) => {
    return _.map(getResolutions(), (resolution) => ({
      browser: browser,
      res: resolution,
      slug: canonize(`${browser.platform}-${browser.browserName}-${resolution}`),
      groupname: groupname,
      buildname: buildname,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER || "development"
    }))
  })
}
