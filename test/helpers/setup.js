import fs from 'fs'
import path from 'path'
import CanvasImage from 'canvas-prebuilt/canvas/lib/image'

require('browser-env')({
  resources: 'usable'
})
const hooks = require('require-extension-hooks')
const Vue = require('vue')

Vue.config.productionTip = false

hooks('vue')
  .plugin('vue')
  .push()
hooks(['vue', 'js'])
  .plugin('babel')
  .push()

window.Date = global.Date = Date
const ASSETS_DIRECTORY = path.join(__dirname, '.')

const WindowImage = function () {
  // Reimplemented the following class:
  // https://github.com/tmpvar/jsdom/blob/master/lib/jsdom/living/nodes/HTMLImageElement-impl.js
  // https://github.com/Automattic/node-canvas#imagesrcbuffer
  let source
  let image
  let onload
  let onerror
  return {
    set src(value) {
      // TODO Throw errors to the Image.onerror handler.
      const onDataLoaded = function (data) {
        image = new CanvasImage()
        image.onload = () => {
          if (onload) {
            onload(image)
          }
        }
        image.onerror = (err) => {
          if (onerror) {
            onerror(err)
          }
        }
        image.src = data
        source = value
      }
      // Fetch the data.
      fs.readFile(path.join(ASSETS_DIRECTORY, value), function (err, data) {
        if (err) {
          throw err
        }
        onDataLoaded(data)
      })
    },
    set onload(handler) {
      onload = handler
    },
    set onerror(handler) {
      onerror = handler
    },
    get src() {
      return source
    },
    // TODO Should allows to modify height and width
    // + add natural height and width
    // Cf. https://github.com/tmpvar/jsdom/blob/master/lib/jsdom/living/nodes/HTMLImageElement-impl.js#L51
    get width() {
      return image && image.width
    },
    get height() {
      return image && image.height
    }
  }
}

window.Image = WindowImage
