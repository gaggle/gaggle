"use strict";
let Page = require("./page")

class BlogPage extends Page {
  open() {
    return super.open("/blog")
  }
}

module.exports = new BlogPage()
