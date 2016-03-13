"use strict";
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

window.addEventListener("load", function (e) {
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
  var duskData = {
    name: "dusk",
    "content": {
      "background-color": "rgba(20, 20, 20, 0.4)"
    },
    "*": {
      color: "#E6E6E6"
    }
  }
  enrichBackgrounds(stateManager, confParser(
    {
      hour: {
        //"0-24": {
        //  name: "test",
        //  content: {"text-shadow": "-3px -3px 1px blue, 3px 3px 2px blue"}
        //},
        "5-8": {
          name: "sunrise",
          "content": {
            "background-color": "rgba(20, 20, 20, 0.4)"
          },
          "*": {
            color: "#E6E6E6"
          }
        },
        "9-11": {
          name: "streaky",
          "content": {
            "background-color": "rgba(20, 20, 20, 0.4)"
          },
          "*": {
            color: "#E6E6E6"
          }
        },
        "12-15": {
          name: "clouds",
          content: {"text-shadow": "-1px -1px 1px #A69779, 1px 1px 2px #4A7FA8"}
        },
        "16-16": {
          name: "dog",
          "content": {
            "background-color": "rgba(50, 50, 50, 0.2)"
          },
          "*": {
            color: "#E6E6E6"
          }
        },
        "17-19": {
          name: "hospital",
          "content": {
            "text-shadow": "0 1px 1px #D9CEB1, 0 -1px 2px #8A8371",
            "background-color": "rgba(170, 170, 170, 0.3)"
          }
        },
        "20-23": duskData,
        "0-4": duskData
      }
    }))
  stateController(stateManager)
  mouseTracker(document.getElementsByClassName("content")[0])
  stateManager.start()
  window.stateManager = stateManager
  console.log("Page initialized")
}, false)
