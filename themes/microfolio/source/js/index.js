"use strict";
require("es6-promise").polyfill()
require("../../components/js/extensions/remove-element")
var DoubleBuffer = require("double-buffer.js")
var getBufferArgs = require("../../components/js/get-buffer-args")
var inBetween = require("../../components/js/in-between-range")
var lookAt = require("../../components/js/look-at")
var registerKeyboard = require("../../components/js/register-keyboard-shortcuts")
var themeConfiguration = require("../../components/js/theme-configuration")
var ThemeManager = require("../../components/js/ThemeManager")
var throttle = require("../../components/js/throttler")
var TimeManager = require("../../components/js/TimeManager")

window.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("noJS").remove()
  var conf = themeConfiguration(raw_conf)
  console.log("Loaded configuration:", conf)

  var buffer = new DoubleBuffer(document.body, document.getElementsByClassName("container")[0])
  var themeManager = new ThemeManager([".content"], Object.keys(conf.background.themes))
  var timeManager = new TimeManager()

  var chooseGreeting = function (hr) {
    var value = inBetween(conf.greetings, hr)
    document.getElementsByTagName("greeting")[0].innerHTML = value
    return value
  }

  buffer.front.element.addEventListener("click", function () {
    if (buffer.transitioning) {
      throw new Error("Transition in progress")
    }
    timeManager.set(new Date())
  })

  themeManager.on(themeManager.events.changed, function (theme) {
    var bg = conf.background;
    var bufferArgs = getBufferArgs(
      bg.themes,
      bg.root_url || "",
      bg.default_size,
      bg.preview_size,
      bg.responsive_sizes,
      theme)
    buffer.set.apply(buffer, bufferArgs)
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

  var content = document.getElementsByClassName("content")[0]
  document.body.onmousemove = throttle(function (e) {
    lookAt(content, e.clientX, e.clientY, {max_degrees: 3})
  }, 100)

  timeManager.start()

  window.buffer = buffer
  window.chooseGreeting = chooseGreeting
  window.themeManager = themeManager
  window.timeManager = timeManager

  console.log("Page initialized")
}, false)
