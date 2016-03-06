var stateManager

var state = {
  tick: "tick",
  stateChanged: "stateChanged",
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
  self.defineEvents(Object.keys(state))

  setInterval(function () {
    self.emit(state.tick, new Date())
  }, 1000)

  self.set = function (newState) {
    var oldState = self._state
    self._state = newState
    self.emit(state.stateChanged, self._state, oldState)
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

  self.on(state.tick, function (d) {
    if (!self._autoState) return
    var newState = getTimeState(d)
    if (newState != self._state) {
      self.set(newState)
    }
  })
  return self
}

Element.prototype.hasClassName = function (name) {
  return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className)
}

Element.prototype.setClassName = function (name) {
  if (!this.hasClassName(name)) {
    this.className = name
  }
}

var stateToGreeting = {
  early: "Oh hello, you're early,",
  morning: "Good morning,",
  afternoon: "Good afternoon,",
  dinner: "Hello hello,",
  evening: "Good evening,",
  night: "Hi, it sure is late, huh?"
}

var enrichGreeting = function (T) {
  var elements = Array.prototype.slice.call(
    document.getElementsByTagName("greeting"), 0)

  T.on(state.stateChanged, function (state) {
    elements.forEach(function (el) {
      el.setClassName(state)
      el.innerHTML = stateToGreeting[state] || "Hello,"
    })
  })
}

window.addEventListener("load", function (e) {
  stateManager = StateManager()
  stateManager.on(state.stateChanged, function (state, prevState) {
    console.log("Transition from " + prevState + " to " + state)
  })
  enrichGreeting(stateManager)
  stateManager.start()
  console.log("Page initialized")
}, false)
