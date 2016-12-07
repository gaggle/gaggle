"use strict";
var gascrolldepth = require("gascrolldepth")
var moment = require("moment")
var helpers = require("../components/js/helpers")

var update_datetime = function (el) {
  var d = el.getAttribute("data-datetime")
  el.textContent = moment(d).fromNow()
}

window.onReady = function () {
  helpers.mapElementsByClassName("relative-time", update_datetime)
  window.gascrolldepth.init()
}

document.addEventListener("DOMContentLoaded", function () {
  window.onReady()
})
