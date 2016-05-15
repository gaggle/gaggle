var browsers = {
  sl_chrome: {
    base: "SauceLabs",
    browserName: "chrome",
    platform: "Windows 10",
    version: "latest"
  },
  sl_edge: {
    base: "SauceLabs",
    browserName: "MicrosoftEdge",
    platform: "Windows 10",
    version: "latest"
  },
  sl_ff: {
    base: "SauceLabs",
    browserName: "firefox",
    platform: "Linux",
    version: "latest"
  },
  sl_ie: {
    base: "SauceLabs",
    browserName: "internet explorer",
    platform: "Windows 10",
    version: "latest"
  },
  sl_safari: {
    base: "SauceLabs",
    browserName: "safari",
    platform: "OS X 10.11",
    version: "latest"
  }
}

module.exports = function () {
  return browsers
}
