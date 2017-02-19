"use strict";
const uiTesting = require("../../ui-testing")

class BasePage {
  open(path = null) {
    if (path)
      browser.url(path || "/")
    else
      throw new Error("No path specified")
  }

  screenshot() {
    const path = uiTesting.getScreenshotFilepath(browser)
    console.log(`Saving screenshot to '${path}'`) // eslint-disable-line no-console
    return browser.saveScreenshot(path)
  }

  size(size) {
    return browser.setViewportSize({
      width: size.width,
      height: size.height
    })
  }
}

module.exports = BasePage
