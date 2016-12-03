var moment = require("moment")

var update_datetime = function (el) {
  var d = el.getAttribute("data-datetime")
  el.textContent = moment(d).fromNow()
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".relative-time").forEach(update_datetime)
  console.log("Ready")
})
