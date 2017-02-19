"use strict";
const Page = require("./lib/page")

class BlogPage extends Page {
  open() {
    return super.open("/blog")
  }
}

module.exports = new BlogPage()
