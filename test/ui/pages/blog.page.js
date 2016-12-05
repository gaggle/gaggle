"use strict";
var Page = require("./page")

class BlogPage extends Page {
  open(path = null) {
    return super.open(path || "/blog")
  }
}

module.exports = BlogPage
