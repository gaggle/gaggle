"use strict";

var default_background = {
  themes: {
    forest: {
      ".m": "https://unsplash.it/1536/654?image=13",
      ".thumb": "https://unsplash.it/128/54?image=13&blur"
    },
    beach: {
      ".m": "https://unsplash.it/1536/654?image=100",
      ".thumb": "https://unsplash.it/128/54?image=100&blur"
    }
  },
  default_size: ".m",
  preview_size: ".thumb"
}

module.exports = function (raw_conf) {
  if (!raw_conf) {
    raw_conf = {}
  }
  return {
    greetings: raw_conf.greetings || {},
    background: raw_conf.background || default_background
  }
}
