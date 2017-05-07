"use strict";
const uiTesting = require("../../ui-testing")

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

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
    browser.setViewportSize({
      width: size.width,
      height: size.height
    })
    sleep(1000)
  }
}

module.exports = BasePage
