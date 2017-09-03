"use strict";
const moment = require("moment")
const path = require("path")
const url = require("url")

function __(str) {
  console.log("__", str)
  return str
}

function css(filename) {
  let p = path.join("css", filename)
  let ext = ".css"
  if (!filename.endsWith(ext)) {
    p += ext
  }
  return `<link href="/${p}" rel="stylesheet">`
}

function full_date(date, formatting) {
  console.log("full_date:", date, formatting)
  return date
}

function is_active(current_url, other_url) {
  return current_url === other_url;
}

function js(filename, async = false) {
  let p = path.join("js", filename + ".min")
  let ext = path.extname(filename) || ".js"
  if (!filename.endsWith(ext)) {
    p += ext
  }
  if (async) {
    return `<script async src="/${p}"></script>`
  } else {
    return `<script src="/${p}"></script>`
  }
}

function titlecase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function type_of(page) {
  if (page.hasOwnProperty("type")) {
    return page.type
  }
  let splitted_path = page.path.split(path.sep)
  return splitted_path[0]
}

function url_for(p) {
  if (p.hasOwnProperty("path")) {
    p = p.path
  }
  return url.resolve("/", p)
}

function url_is_internal(u) {
  let re = /^(http|https):\/\/*/gi;
  return re.test(u)
}


module.exports = {
  __,
  css,
  full_date,
  is_active,
  js,
  moment,
  titlecase,
  type_of,
  url_for,
  url_is_internal,
}
