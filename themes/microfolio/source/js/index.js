"use strict";
require("./polyfills/isInteger")
var enrichBackgrounds = require("./register-backgrounds")
var enrichGreetings = require("./register-greetings")
var stateController = require("./state-manager-controller")
var StateManager = require("./state-manager")
var mouseTracker = require("./mouse-tracker")

var confParser = function (conf) {
  var data = {}
  Object.keys(conf).forEach(function (eventName) {
    var rangeData = conf[eventName]
    data[eventName] = Object.keys(rangeData).map(function (rangestr) {
      var value = rangeData[rangestr]
      var pair = rangestr.split("-").map(Number)
      pair.push(value)
      return pair
    })
  })
  return data
}

window.addEventListener("DOMContentLoaded", function (e) {
  document.getElementsByClassName("back")[0].classList.remove("noJS")
  var stateManager = new StateManager()
  enrichGreetings(stateManager, confParser(
    {
      hour: {
        "5-6": "Oh hello, you're early,",
        "7-8": "Good morning,",
        "9-11": "Hi,",
        "12-15": "Good afternoon,",
        "16-19": "Hello,",
        "20-23": "Good evening,",
        "0-1": "Hi,",
        "2-4": "Hi, it sure is late, huh?"
      }
    }))
  enrichBackgrounds(stateManager, [
    {
      name: "sunrise",
      "content": {
        "text-shadow": "1px 1px 1px #CCBA6B",
        "background-color": "rgba(20, 20, 20, 0.4)"
      },
      "*": {
        color: "white"
      }
    },
    {
      name: "streaky",
      "content": {
        "text-shadow": "0 1px 0px #B34035",
        "background-color": "rgba(20, 20, 20, 0.4)"
      },
      "*": {
        color: "#E6E6E6"
      }
    },
    {
      name: "clouds",
      content: {"text-shadow": "-1px -1px 1px #A69779, 1px 1px 2px #4A7FA8"}
    },
    {
      name: "dog",
      "content": {
        "text-shadow": "-1px -.5px 1px #20160F",
        "background-color": "rgba(50, 50, 50, 0.2)"
      },
      "*": {
        color: "#E6E6E6"
      }
    },
    {
      name: "hospital",
      "content": {
        "text-shadow": "0 1px 1px #D9CEB1, 0 -1px 2px #8A8371",
        "background-color": "rgba(170, 170, 170, 0.3)"
      }
    },
    {
      name: "dusk",
      "content": {
        "text-shadow": "0 1px 1px #FFD166, .8px -1.5px 1px #1F132B",
        "background-color": "rgba(20, 20, 20, 0.4)"
      },
      "*": {
        color: "#E6E6E6"
      }
    }
  ])
  stateController(stateManager)
  mouseTracker(document.getElementsByClassName("content")[0])
  stateManager.start()
  window.stateManager = stateManager
  console.log("Page initialized")
}, false)
