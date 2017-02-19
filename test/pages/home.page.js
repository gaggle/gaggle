"use strict";
const Page = require("./lib/page")

class HomePage extends Page {
  open() {
    return super.open("/")
  }
}

module.exports = new HomePage()
