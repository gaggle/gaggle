"use strict";
let Page = require("./page")

class HomePage extends Page {
  open() {
    return super.open("/")
  }
}

module.exports = new HomePage()
