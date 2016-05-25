"use strict";

module.exports = function (themes, root, default_key, preview_key, queries, theme) {
  var args = []
  var theme_data = themes[theme]
  if (typeof theme_data == "string") {
    args = [theme_data]
  } else {
    if (preview_key) {
      args.push(root + theme_data[preview_key])
    }

    var path
    if (default_key) {
      path = root + theme_data[default_key]
    }
    if (queries) {
      Object
        .keys(queries)
        .map(Number)
        .sort()
        .forEach(function (width) {
          var size = queries[width]
          if (window.matchMedia("(min-width: " + width + "px)").matches) {
            path = root + theme_data[size]
          }
        })
    }
    if (path) {
      args.push(path)
    }
  }
  return args
}
