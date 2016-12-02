var Page = require("./page")

class BlogPage extends Page {
  open(path) {
    return super.open("/blog")
  }
}

module.exports = BlogPage
