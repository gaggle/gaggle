module.exports = function (tagName, opts) {
  if (!opts) opts = {}
  var el = document.createElement(tagName)
  if (opts.text)
    el.appendChild(document.createTextNode(opts.text))
  if (opts.class)
    el.className = opts.class
  if (opts.dataset)
    for (var key in opts.dataset) {
      if (!opts.dataset.hasOwnProperty(key)) continue
      el.dataset[key] = opts.dataset[key]
    }
  return el
}
