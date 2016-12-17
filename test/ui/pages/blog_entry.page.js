"use strict";
let Page = require("./page")

class BlogEntryPage extends Page {
  open(path = null) {
    return super.open("/blog/" + path)
  }
}

module.exports = new BlogEntryPage()
