exports.mapElementsByClassName = function (className, fn) {
  var result = []
  var elements = document.getElementsByClassName(className)
  var i, obj, len = elements.length
  for (i = 0; i < len; ++i) {
    obj = elements[i]
    result.push(fn(obj))
  }
  return result
}
