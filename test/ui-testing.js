"use strict";
const fs = require("fs")
const path = require("path")

exports.getScreenshotFilepath = function (browser, cwd = ".") {
  const screenshotPath = path.join(cwd, "screenShots")
  exports.mkdirSync(screenshotPath)

  const browserName = browser.desiredCapabilities.browserName
  const size = browser.getViewportSize()
  const timestamp = (new Date()).toJSON().replace(/:/g, "-");

  const filename = `${browserName}-${size.width}x${size.height}-${timestamp}.png`
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
