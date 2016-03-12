"use strict";
var enrichBackgrounds = require("./register-backgrounds")
var enrichGreetings = require("./register-greetings")
var stateController = require("./state-manager-controller")
var StateManager = require("./state-manager")

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
        "0-4": "Hi, it sure is late, huh?",
        "5-7": "Oh hello, you're early,",
        "8-11": "Good morning,",
        "12-15": "Good afternoon,",
        "16-19": "Hello hello,",
        "20-24": "Good evening,"
      }
    }))
  enrichBackgrounds(stateManager, confParser(
    {
      hour: {
        //"0-24": {
        //  name: "test",
        //  content: {"text-shadow": "-3px -3px 1px blue, 3px 3px 2px blue"}
        //},
        "0-20": {
          name: "clouds",
          content: {"text-shadow": "-1px -1px 1px #D9C69E, 1px 1px 2px #4A7FA8"}
        },
        "21-23": {
          name: "hospital",
          content: {"text-shadow": "0 1px 1px #D9CEB1, 0 -1px 2px #8A8371"}
        }
      }
    }))
  stateController(stateManager)

  stateManager.start()
  window.stateManager = stateManager
  console.log("Page initialized")
}, false)
