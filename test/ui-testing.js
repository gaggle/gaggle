"use strict";
const fs = require("fs")
const path = require("path")
const url = require("url")

exports.getScreenshotFilepath = function (browser, cwd = ".") {
  const screenshotPath = path.join(cwd, "screenShots")
  module.mkdirSync(screenshotPath)

  const uri = url.parse(browser.getUrl())
  let p = uri.path
  if (p.endsWith("/"))
    p += "index"

  const browserName = browser.desiredCapabilities.browserName
  const size = browser.getViewportSize()
  const timestamp = (new Date()).toJSON().replace(/:/g, "-");

  const filename = `${p}_${browserName}_${size.width}x${size.height}_${timestamp}.png`
  return path.join(screenshotPath, filename)
}

exports.mkdirSync = (path) => {
  try {
    fs.mkdirSync(path)
  } catch (e) {
    if (e.code !== "EEXIST") throw e
  }
}

exports.sizes = [{width: 320, height: 568}, {width: 800, height: 600}]
