"use strict";
var EventEmitter = require("wolfy87-eventemitter")

var SECOND = 1000

var StateManager = function (opts) {
  if (!opts) opts = {}
  if (!opts.startTime) opts.startTime = new Date()
  var self = new EventEmitter()
  self.events =
  {
    tick: "tick",
    second: "second",
    minute: "minute",
    hour: "hour",
    minutesElapsed: "minutesElapsed"
  }
  self.defineEvents(Object.keys(self.events))

  self.time = new Date(opts.startTime.getTime())
  self._running = false
  setInterval(function () {
    if (self._running) {
      self.time.setSeconds(self.time.getSeconds() + 1)
      self.emit(self.events.tick, self.time.getSeconds())
    }
  }, SECOND)

  self.onSeconds = function () {
    self.emit(self.events.second, self.time.getSeconds())
  }
  self.onMinutes = function () {
    self.emit(self.events.minute, self.time.getMinutes())
  }
  self.onMinutesElapsed = function (val) {
    self.emit(self.events.minutesElapsed, val)
  }
  self.onHours = function () {
    self.emit(self.events.hour, self.time.getHours())
  }

  self.on(self.events.tick, function () {
    var seconds = self.time.getSeconds()
    var minutes = self.time.getMinutes()
    self.onSeconds()
    if (seconds == 0) self.onMinutes()
    if (seconds == 0 && minutes == 0) self.onHours()
    var minutesElapsed = self.getElapsed() / 60
    if (Number.isInteger(minutesElapsed)) self.onMinutesElapsed(minutesElapsed)
  })

  self.activate = function () {
    self.onSeconds()
    self.onMinutes()
    self.onMinutesElapsed(self.getElapsed() / 60)
    self.onHours()
  }

  self.start = function (quiet) {
    if (!self._running && !quiet) self.activate()
    self._running = true
  }

  self.stop = function () {
    self._running = false
  }

  self.set = function (newTime) {
    self.time = newTime
    self.activate()
  }

  self.setStart = function (newTime) {
    opts.startTime = newTime
    self.activate()
  }

  self.getElapsed = function () {
    var timeDiff = Math.abs(self.time.getTime() - opts.startTime.getTime())
    return timeDiff / SECOND
  }

  return self
}

module.exports = StateManager
