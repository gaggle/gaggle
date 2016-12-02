var Page = require("./page")

class HomePage extends Page {
  open(path) {
    return super.open("/")
  }
}

module.exports = HomePage
