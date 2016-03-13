var jss = require("jss").create()
var uniq = require("lodash/uniq")
var transitionEvent = require("./which-transition-event")()

var FLIP_TRIGGER = "fadein"
var QUERIES = {
  l: "@media (min-width: 691px)",
  xl: "@media (min-width: 1382px)"
  //xxl: "@media (min-width: 2765px)"
}

module.exports = function (stateManager, conf) {
  var backBuffer  = document.getElementsByClassName("back")[0],
      frontBuffer = document.getElementsByClassName("front")[0],
      content     = document.getElementsByClassName("content")
  var states = []

  var removeMany = function (el, cls) {
    cls.forEach(function (c) {
      el.classList.remove(c)
    })
  }

  var getIntersection = function (array1, array2) {
    return array1.filter(function (n) {
      return array2.indexOf(n) != -1
    })
  }

  var toList = function (nodeList) {
    var array = []
    for (var i = 0; i < nodeList.length; i++) {
      array.push(nodeList[i])
    }
    return array
  }

  var shuffleBuffers = function () {
    var state = getIntersection(states, toList(frontBuffer.classList))
    removeMany(backBuffer, states.concat(["thumb"]))
    backBuffer.classList.add(state)
    removeMany(frontBuffer, states.concat([FLIP_TRIGGER]))
  }

  frontBuffer.addEventListener(transitionEvent, function (e) {
    if (!frontBuffer.classList.contains(FLIP_TRIGGER)) return
    shuffleBuffers()
  })

  var shouldFrontChange = function (d) {
    return !frontBuffer.classList.contains(d) &&
           frontBuffer.className.indexOf(d) != -1
  }

  var shouldBackChange = function (d) {
    return !frontBuffer.classList.contains(d) &&
           !backBuffer.classList.contains(d)
  }

  var shouldFlushFront = function (d) {
    if (frontBuffer.classList.contains(FLIP_TRIGGER))
      return true
  }

  var style = {}, media = {}
  Object.keys(QUERIES).forEach(function (k) {
    var v = QUERIES[k]
    media[v] = {}
  })
  Object.keys(conf).forEach(function (eventName) {
    var eventData = conf[eventName]
    eventData.forEach(function (e) {
      var data = e[2]
      states.push(data.name)
      var bgsel = ".bg." + data.name
      style[bgsel] = {
        "background-image": url(data.name, ".m")
      }
      style[bgsel + ".thumb"] = {
        "background-image": url(data.name, ".thumb")
      }
      if (data.content) style[".content." + data.name] = data.content
      style["." + data.name + " *"] = data["*"]

      media[QUERIES.l][bgsel] = {
        "background-image": url(data.name, ".l")
      }
      media[QUERIES.xl][bgsel] = {
        "background-image": url(data.name, ".xl")
      }
      //media[QUERIES.xxl][bgsel] = {
      //  "background-image": url(data.name, ".xxl")
      //}
    })
    stateManager.on(eventName, function (value) {
      eventData.some(function (e) {
        var min = e[0], max = e[1], data = e[2]
        if (!isBetween(value, min, max)) return
        if (shouldFlushFront(data.name)) {
          shuffleBuffers()
        }
        if (!shouldFrontChange(data.name) &&
            !shouldBackChange(data.name)) return
        if (!getIntersection(states, toList(backBuffer.classList)).length) {
          backBuffer.classList.add(data.name, "thumb")
        }
        removeMany(frontBuffer, states)
        frontBuffer.classList.add(data.name, FLIP_TRIGGER)
        Array.prototype.forEach.call(content, function (el) {
          removeMany(el, states)
          el.classList.add(data.name)
        })
        return true
      })
    })
  })
  states = uniq(states)
  attachStyleSheet(style, media)
}

var isBetween = function (x, min, max) {
  return x >= min && x <= max
}

var path = function (name, suffix) {
  if (!suffix) suffix = ""
  return "/img/" + name + suffix + ".jpg"
}

var url = function (name, suffix) {
  return "url('" + path(name, suffix) + "')"
}

var attachStyleSheet = function (style, media) {
  // Somehow order is important (in a hash?) so media queries need to go last...
  Object.keys(media).forEach(function (k) {
    var v = media[k]
    style[k] = v
  })
  var sheet = jss.createStyleSheet(style, {named: false})
  sheet.attach()
}
