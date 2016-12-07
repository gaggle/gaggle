"use strict";
let Page = require("./page")

class HomePage extends Page {
  open(path = null) {
    return super.open(path || "/")
  }
}

module.exports = HomePage
