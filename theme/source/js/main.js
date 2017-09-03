"use strict";
const gascrolldepth = require("gascrolldepth")
const moment = require("moment")
const helpers = require("../../js/helpers")

const update_datetime = function (el) {
  let d = el.getAttribute("data-datetime")
  el.textContent = moment(d).fromNow()
}

window.onReady = function () {
  helpers.mapElementsByClassName("relative-time", update_datetime)
  window.gascrolldepth.init()
}

document.addEventListener("DOMContentLoaded", function () {
  window.onReady()
})
