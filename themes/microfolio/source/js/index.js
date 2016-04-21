"use strict";
require("./polyfills")
require("./extensions/remove-element")
var DoubleBuffer = require("./DoubleBuffer")
var inBetween = require("./in-between-range")
var mouseTracker = require("./mouse-tracker")
var registerKeyboard = require("./register-keyboard-shortcuts")
var ThemeManager = require("./ThemeManager")
var TimeManager = require("./TimeManager")

var bgpath = function (name, suffix) {
  if (!suffix) suffix = ""
  return "/img/" + name + suffix + ".jpg"
}

var QUERIES = {
  l: "(min-width: 691px)",
  xl: "(min-width: 1382px)"
  //xxl: "(min-width: 2765px)"
}

window.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("noJS").remove()

  var timeManager = new TimeManager()

  var chooseGreeting = function (hr) {
    var night = "Hi,"
    var value = inBetween({
      "5-6": "Oh hello, you're up early,",
      "6-9": "Good morning,",
      "9-11": "Hi,",
      "11-13": "Good day,",
      "13-15": "Good afternoon,",
      "15-18": "Hello,",
      "18-23": "Good evening,",
      "23-24": night, "0-2": night,
      "2-4": "Hi, up late huh?"
    }, hr)
    document.getElementsByTagName("greeting")[0].innerHTML = value
    return value
  }

  var buffer = new DoubleBuffer(document.body, document.getElementsByClassName("container")[0])
  var themeManager = new ThemeManager([".content"], ["sunrise", "streaky", "clouds", "dog", "hospital", "dusk"])
  buffer.front.element.addEventListener("click", function () {
    timeManager.set(new Date())
  })

  themeManager.on(themeManager.events.changed, function (theme) {
    var p = bgpath(theme, ".m")
    if (window.matchMedia(QUERIES.xl).matches)
      p = bgpath(theme, ".xl")
    else if (window.matchMedia(QUERIES.l).matches)
      p = bgpath(theme, ".l")
    if (buffer.back.isEmpty()) {
      buffer.set(bgpath(theme, ".thumb"), p)
    } else {
      buffer.set(bgpath(theme, ".thumb"), p)
    }
  })

  timeManager.on(timeManager.events.initialized, function () {
    chooseGreeting(timeManager.time.getHours())
    console.log("Theme", themeManager.setRandom())
  })
  timeManager.on(timeManager.events.theHour, chooseGreeting)
  timeManager.on(timeManager.events.minutesElapsed, function () {
    console.log("Theme", themeManager.setRandom())
  })
  registerKeyboard(timeManager)
  mouseTracker(document.getElementsByClassName("content")[0])
  timeManager.start()

  window.buffer = buffer
  window.chooseGreeting = chooseGreeting
  window.themeManager = themeManager
  window.timeManager = timeManager

  console.log("Page initialized")
}, false)
