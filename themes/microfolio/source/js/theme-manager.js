"use strict";
var flatMap = require("lodash/flatMap")
var shuffle = require("lodash/shuffle")
var EventEmitter = require("wolfy87-eventemitter")

var ThemeManager = function (elements, themes) {
  var self = this
  self._emitter = new EventEmitter()
  self.on = self._emitter.on.bind(self._emitter)
  self.events = {changed: "changed"}
  self._emitter.defineEvents(Object.keys(self.events))
  self._themes = themes
  self._shuffled = []
  self._elements = flatMap(elements, function (e) {
    if (e instanceof HTMLElement) return [e]
    var el = document.querySelectorAll(e)
    if (!el) throw new Error("No element '" + e + "'")
    return Array.prototype.slice.call(el) // unwrap NodeList
  })
  self.theme = null
  return this
}

ThemeManager.prototype.set = function (theme) {
  var self = this
  self._elements.forEach(function (el) {
    el.classList.remove(self.theme)
    el.classList.add(theme)
  })
  self.theme = theme
  if (self.onChanged) self.onChanged(self.theme)
  self._emitter.emit(self.events.changed, self.theme)
}

ThemeManager.prototype.setRandom = function () {
  if (!this._shuffled.length)
    this._shuffled = shuffle(this._themes)
  var theme = this._shuffled.pop()
  this.set(theme)
  return theme
}

module.exports = ThemeManager
