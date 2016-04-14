"use strict";
var EventEmitter = require("wolfy87-eventemitter")

var SECOND = 1000

var StateManager = function (opts) {
  var self = this
  if (!opts) self.opts = {}
  if (!self.opts.startTime) self.opts.startTime = new Date()
  self._emitter = new EventEmitter()
  self.events = {
    tick: "tick",
    initialize: "initialize",
    theSecond: "theSecond",
    theMinute: "theMinute",
    theHour: "theHour",
    minutesElapsed: "minutesElapsed"
  }
  self._emitter.defineEvents(Object.keys(self.events))
  self.on = self._emitter.on.bind(self._emitter)

  self.time = new Date(self.opts.startTime.getTime())
  self._running = false
  setInterval(function () {
    if (self._running) {
      self.time.setSeconds(self.time.getSeconds() + 1)
      self._emitter.emit(self.events.tick)
    }
  }, SECOND)

  self._emitter.on(self.events.tick, function () {
    self._processEvents()
  })

  return this
}

StateManager.prototype.initialize = function () {
  this._emitter.emit(this.events.initialize)
  this._processEvents()
}

StateManager.prototype.set = function (newTime) {
  this.opts.startTime = new Date(newTime)
  this.time = new Date(this.opts.startTime.getTime())
  this.initialize()
  return this.time
}

StateManager.prototype.start = function (quiet) {
  if (!this._running && !quiet) {
    this.initialize()
  }
  this._running = true
}

StateManager.prototype.stop = function () {
  this._running = false
}

StateManager.prototype._onTheSecond = function (val) {
  this._emitter.emit(this.events.theSecond, val)
}

StateManager.prototype._onTheMinute = function (val) {
  this._emitter.emit(this.events.theMinute, val)
}

StateManager.prototype._onTheHour = function (val) {
  this._emitter.emit(this.events.theHour, val)
}

StateManager.prototype._onMinutesElapsed = function (val) {
  this._emitter.emit(this.events.minutesElapsed, val)
}

StateManager.prototype._getElapsed = function () {
  var timeDiff = Math.abs(this.time.getTime() - this.opts.startTime.getTime())
  return timeDiff / SECOND
}

StateManager.prototype._processEvents = function () {
  var second = this.time.getSeconds()
  var minute = this.time.getMinutes()
  var hour = this.time.getHours()
  this._onTheSecond(second)
  if (second == 0) this._onTheMinute(minute)
  if (second == 0 && minute == 0) this._onTheHour(hour)
  var minutesElapsed = this._getElapsed() / 60
  if (Number.isInteger(minutesElapsed) && minutesElapsed > 0) this._onMinutesElapsed(minutesElapsed)
}

module.exports = StateManager