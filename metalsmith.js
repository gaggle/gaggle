"use strict";
// TODO: Parse excerpts into page.excerpt & page.more
// TODO: Page's .path should end on slash if it is a directory... (re: active-menu logic)
// TODO: Support chinese + japanese post names == Fix https://github.com/segmentio/substitute
// TODO: Consider Stylus Axis for fun w. CSS

// Later optimisations, worth a separate blog:
// TODO: Consider date-fns as replacement to moment, to cut down on bundled .js

const addFileSource = require("metalsmith-file-source")
const addMetadata = require("metalsmith-global-metadata")
const autoprefixer = require("autoprefixer-stylus")
const beautify = require("metalsmith-beautify")
const blog = require("metalsmith-blog")
const ignore = require("metalsmith-ignore")
const markdown = require("metalsmith-markdown")
const Metalsmith = require("metalsmith")
const moreSource = require("metalsmith-more-source")
const nib = require("nib")
const packjs = require("metalsmith-pack-js")
const path = require("path")
const serve = require("metalsmith-serve")
const stylus = require("metalsmith-stylus")
const watch = require("metalsmith-watch")

const IS_DEV = process.env.NODE_ENV !== "production"
const DO_SERVE = process.env.SERVE === "true"

const metalsmith = new Metalsmith(__dirname)

metalsmith
  .source("./source")
  .use(moreSource("./theme/source")) // For js+css files
  .destination("./public")
  .use(ignore(["**/.DS_Store"]))
  .clean(true)
  .use(addFileSource())
  .use(addMetadata({
    config: require("./metalsmith.json"),
    env: process.env,
    pkg: require("./package.json"),
  }))

metalsmith.use(markdown({
  gfm: true, // GitHub flavored markdown
  smartypants: true, // smart quotes and dashes
  tables: true, // GFM tables
}))

metalsmith.use(blog({
  sources: ["_posts/**/*.html", "_drafts/**/*.html"],
  pattern: "blog/:date/:slug",
  layout: {
    default: "empty",
    directory: "theme/layouts",
    globals: require("./lib/global-build-functions"),
    inplace: require("nunjucks-tags-typography"),
  },
}))

metalsmith.use(packjs({
    root: path.resolve(__dirname, "./theme/source/"),
    entry: "./js/main.js",
    mangle: !IS_DEV,
  }
))

metalsmith.use(stylus({
  paths: ["./theme"],
  use: [nib(), autoprefixer()],
}))

if (IS_DEV) {
  metalsmith.use(beautify())
}

if (DO_SERVE) {
  metalsmith
    .use(watch({livereload: true}))
    .use(serve())
}

metalsmith.build(error => {
  if (error) {
    throw error
  }
})
