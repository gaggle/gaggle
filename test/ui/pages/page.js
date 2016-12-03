"use strict";
const uiTesting = require("../../ui-testing")

class Page {
  open(path = null) {
    return browser.url(path || "/")
  }

  screenshot() {
    return browser.saveScreenshot(uiTesting.getScreenshotFilepath(browser))
  }

  size(size) {
    return browser.setViewportSize({
      width: size.width,
      height: size.height
    })
  }
}

module.exports = Page
