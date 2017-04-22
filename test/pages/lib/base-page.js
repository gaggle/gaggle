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
    // Is this stuff causing flakiness on SauceLabs browsers?
    // A failure will include this successful step:
    // COMMAND 0.02
    // GET window/current/size
    //
    // PARAMETERS
    // {}
    //
    // RESPONSE
    //   => {"width":336,"height":661}
    //
    // And the immediate next step 30 seconds later is:
    // COMMAND 30.01
    // POST execute
    //
    // PARAMETERS
    // {"args":[],"script":"return (function getViewportSize() {\n return {\n screenWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),\n screenHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)\n };\n}).apply(null, arguments)"}
    //
    // RESPONSE
    //   => ERROR user closed connection while waiting for command to complete
  }
}

module.exports = BasePage
