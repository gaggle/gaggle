"use strict";
const Component = require("./lib/component")

class HeaderComponent extends Component {
  get blog_link() {
    return browser.element(".blog > a")
  }

  get home_link() {
    return browser.element(".home > a")
  }
}

module.exports = new HeaderComponent()
