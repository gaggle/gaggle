"use strict";
let Page = require("./page")

class HeaderPage extends Page {
  get blog_link() {
    return browser.element(".blog > a")
  }

  get home_link() {
    return browser.element(".home > a")
  }
}

module.exports = new HeaderPage()
