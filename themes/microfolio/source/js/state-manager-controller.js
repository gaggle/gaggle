"use strict";

module.exports = function (stateManager) {
  document.onkeypress = function (e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;

    var t = stateManager.time
    if (charCode) switch (String.fromCharCode(charCode)) {
      case "n":
        t.setHours(t.getHours() + 1)
        stateManager.set(t)
        console.log(stateManager.time)
        break
      case "p":
        t.setHours(t.getHours() - 1)
        stateManager.set(t)
        console.log(stateManager.time)
        break
      case "s":
        if (stateManager._running) {
          console.log("Stopping StateManager")
          stateManager.stop()
        } else {
          console.log("Starting StateManager")
          stateManager.start()
        }
        break
    }
  }
}
