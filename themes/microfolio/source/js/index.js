var stateManager

Element.prototype.hasClassName = function (name) {
  return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className)
}

Element.prototype.setClassName = function (name) {
  if (!this.hasClassName(name)) {
    this.className = name
  }
}

var state = {
  early: "early",
  morning: "morning",
  noon: "noon",
  afternoon: "afternoon",
  dinner: "dinner",
  evening: "evening",
  night: "night"
}

var getTimeState = function (date) {
  var hr = date.getHours()
  if (4 <= hr && hr <= 7)
    return state.early

  if (7 <= hr && hr <= 11)
    return state.morning

  if (11 <= hr && hr <= 15)
    return state.afternoon

  if (15 <= hr && hr <= 19)
    return state.dinner

  if (19 <= hr && hr <= 24)
    return state.evening

  if (0 <= hr && hr <= 5)
    return state.night
}

var StateManager = function () {
  var self = new EventEmitter()
  self.defineEvents(["stateChanged"] + Object.keys(state))

  setInterval(function () {
    self.emit("tick", new Date())
  }, 1000)

  self.set = function (newState) {
    var oldState = self._state
    self._state = newState
    self.emit("stateChanged", self._state, oldState)
    self.emit(self._state)
  }
  self._state = self.set(getTimeState(new Date()))

  self._autoState = false
  self.start = function () {
    self._autoState = true
    self.set(getTimeState(new Date()))
  }

  self.stop = function () {
    self._autoState = false
  }

  self.on("tick", function (d) {
    if (!self._autoState) return
    var newState = getTimeState(d)
    if (newState != self._state) {
      self.set(newState)
    }
  })
  return self
}

window.addEventListener("load", function (e) {
  stateManager = StateManager()
  stateManager.on("stateChanged", function (state, prevState) {
    console.log("Transition from " + prevState + " to " + state)
  })
  stateManager.start()
  console.log("Page initialized")
}, false)
