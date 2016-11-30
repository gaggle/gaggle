var Page = require("./page")

class HomePage extends Page {
  open(path) {
    return super.open("/")
  }

  get blog_link() {
    return $(".blog > a")
  }

  get home_link() {
    return $(".home > a")
  }
}

module.exports = HomePage
