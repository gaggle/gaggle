var jss = require("jss").create()
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

  backBuffer.origClassName = backBuffer.className
  frontBuffer.origClassName = frontBuffer.className
  Array.prototype.forEach.call(content, function (el) {
    el.origClassName = el.className
  })

  frontBuffer.addEventListener(transitionEvent, function (e) {
    if (!frontBuffer.classList.contains(FLIP_TRIGGER)) return
    var classes = frontBuffer.className
      .replace(frontBuffer.origClassName, "")
      .replace(FLIP_TRIGGER, "")
      .trim()
    backBuffer.className = backBuffer.origClassName + " " + classes
    frontBuffer.className = frontBuffer.origClassName
  })

  var shouldFrontChange = function (d) {
    return !frontBuffer.classList.contains(d) &&
           frontBuffer.className != frontBuffer.origClassName
  }

  var shouldBackChange = function (d) {
    return !frontBuffer.classList.contains(d) &&
           !backBuffer.classList.contains(d)
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
      var bgsel = ".bg." + data.name

      style[bgsel] = {
        "background-image": url(data.name, ".m")
      }
      style[bgsel + ".thumb"] = {
        "background-image": url(data.name, ".thumb")
      }
      style[".content." + data.name] = data.content
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
        if (!shouldFrontChange(data.name) &&
            !shouldBackChange(data.name)) return
        if (frontBuffer.className == frontBuffer.origClassName &&
            backBuffer.className == backBuffer.origClassName) {
          backBuffer.classList.add(data.name, "thumb")
        }
        frontBuffer.className = frontBuffer.origClassName
        frontBuffer.classList.add(data.name, FLIP_TRIGGER)
        Array.prototype.forEach.call(content, function (el) {
          el.className = el.origClassName
          el.classList.add(data.name)
        })
        return true
      })
    })
  })
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
