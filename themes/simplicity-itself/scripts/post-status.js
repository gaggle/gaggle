/* global hexo */
"use strict";

hexo.extend.helper.register("isNotAlphaStatus", function (post) {
  return post.status !== "alpha"
})
