"use strict";
/* global $ */
var Page = require("./page")

class HeaderPage extends Page {
  get blog_link() {
    return $(".blog > a")
  }

  get home_link() {
    return $(".home > a")
  }
}

module.exports = HeaderPage
