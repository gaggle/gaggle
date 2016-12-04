"use strict";

const browsers = {
  chrome: {versions: ["latest"], platforms: ["Windows 10"]},
  safari: {versions: ["latest"], platforms: ["OS X 10.11"]},
  firefox: {versions: ["latest"], platforms: ["Linux"]},
  MicrosoftEdge: {versions: ["latest"], platforms: ["Windows 10"]},
  "internet explorer": {versions: ["latest"], platforms: ["Windows 7"]}
}

function sluggify(str) {
  str = str.toLowerCase()
  str = str.replace(/[^a-z0-9]+/g, "-")
  return str
}

module.exports = function (opts = {}) {
  const sl_browsers = {}
  var keys = Object.keys(browsers)
  keys.forEach((key) => {
    let value = browsers[key]
    value.versions.forEach((version) => {
      value.platforms.forEach((platform) => {
        let slug = sluggify([key, platform, version].join(" "))
        let prefix = opts["name-prefix"] ? `${opts["name-prefix"]}-` : null
        sl_browsers[slug] = {
          base: "SauceLabs",
          browserName: key,
          platform: platform,
          version: version,
          "tunnel-identifier": opts.tunnel,
          name: opts.name || `${prefix}${slug}`,
          build: opts.build
        }
      })
    })
  })
  return sl_browsers
}
