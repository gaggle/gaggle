var jss = require("jss").create()
var shuffle = require("lodash/shuffle")
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
  var themeNames = []

  var removeMany = function (el, cls) {
    var newClassName = el.className
    cls.some(function (c) {
      var i = newClassName.indexOf(c)
      if (i == -1) return
      newClassName = (newClassName.slice(0, i - 1) +
                      newClassName.slice(i + c.length, newClassName.length))
    })
    if (newClassName)
      el.className = newClassName
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
    var state = getIntersection(themeNames, toList(frontBuffer.classList))
    removeMany(backBuffer, themeNames.concat(["thumb"]))
    if (state.length)
      backBuffer.classList.add(state)
    if (frontBuffer.classList.contains("thumb")) {
      backBuffer.classList.add("thumb")
    }
    removeMany(frontBuffer, themeNames.concat(["thumb", FLIP_TRIGGER]))
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

  conf.forEach(function (theme) {
    themeNames.push(theme.name)
    var bgsel = ".bg." + theme.name
    style[bgsel] = {
      "background-image": url(theme.name, ".m")
    }
    style[bgsel + ".thumb"] = {
      "background-image": url(theme.name, ".thumb")
    }
    if (theme.content) style[".content." + theme.name] = theme.content
    style["." + theme.name + " *"] = theme["*"]

    media[QUERIES.l][bgsel] = {
      "background-image": url(theme.name, ".l")
    }
    media[QUERIES.xl][bgsel] = {
      "background-image": url(theme.name, ".xl")
    }
  })

  var shuffled = []
  var changeBackground = function () {
    if (!shuffled.length) shuffled = shuffle(conf.slice())
    var theme = shuffled.pop()
    if (shouldFlushFront(theme.name)) {
      shuffleBuffers()
    }
    if (!shouldFrontChange(theme.name) && !shouldBackChange(theme.name)) return

    var loadFull = function () {
      var p = path(theme.name, ".m")
      if (window.matchMedia(QUERIES.l)) {
        p = path(theme.name, ".l")
      } else if (window.matchMedia(QUERIES.xl)) {
        p = path(theme.name, ".xl")
      }
      console.log("Loading", p)
      var img = new Image()
      img.addEventListener("load", function () {
        frontBuffer.classList.add(theme.name, FLIP_TRIGGER)
        Array.prototype.forEach.call(content, function (el) {
          removeMany(el, themeNames)
          el.classList.add(theme.name)
        })
      }, false)
      img.src = p
    }
    if (getIntersection(themeNames, toList(backBuffer.classList)).length) {
      loadFull()
    } else {
      var thumb_img = new Image()
      thumb_img.addEventListener("load", function () {
        var triggerFull = function () {
          frontBuffer.removeEventListener(
            transitionEvent, triggerFull, false)
          loadFull()
        }
        frontBuffer.addEventListener(transitionEvent, triggerFull, false)
        frontBuffer.classList.add(theme.name, "thumb", FLIP_TRIGGER)
      }, false)
      thumb_img.src = path(theme.name, ".thumb")
      Array.prototype.forEach.call(content, function (el) {
        removeMany(el, themeNames)
        el.classList.add(theme.name)
      })
    }
  }
  stateManager.on("minutesElapsed", function () {
    changeBackground()
  })
  frontBuffer.addEventListener("click", function () {
    changeBackground()
  })
  themeNames = uniq(themeNames)
  attachStyleSheet(style, media)
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
