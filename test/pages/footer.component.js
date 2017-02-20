"use strict";
const Component = require("./lib/component")

class FooterComponent extends Component {
  get author_picture() {
    return browser.element(".author-info .profile-pic")
  }

  scroll_author_picture() {
    // `this.author_picture.scroll()` doesn't work when inspecting SauceLabs renders, too bad!
    return browser.scroll(".author-info .profile-pic")
  }
}

module.exports = new FooterComponent()