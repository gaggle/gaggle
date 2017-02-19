"use strict";
const BasePage = require("./base-page")

class Page extends BasePage {
  constructor() {
    super()
    let classname = this.constructor.name.toLowerCase();
    browser.options.desiredCapabilities.name = classname + "-" + browser.options.desiredCapabilities.name
  }
}

module.exports = Page
