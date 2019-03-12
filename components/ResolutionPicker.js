import debounce from 'lodash/debounce'

export default {
  props: {
    themeData: { type: Object, required: false }
  },
  data() {
    return {
      size: undefined,
      afterResizedHandler: debounce(this.reportResolution, 500)
    }
  },
  beforeMount: function() {
    this.onResizeHandler()
    console.debug('Picked intial resolution', this.size)
  },
  mounted: function() {
    window.addEventListener('resize', this.onResizeHandler)
    window.addEventListener('resize', this.afterResizedHandler)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.onResizeHandler)
    window.removeEventListener('resize', this.afterResizedHandler)
  },
  render(h) {
    const children = this.$scopedSlots.default({ size: this.size })
    return children.length > 1 ? h('div', children) : children
  },
  methods: {
    onResizeHandler: function(ev) {
      const QUERIES = {
        m: '(min-width: 768px), (min-height: 328px)',
        l: '(min-width: 1536px), (min-height: 654px)',
        xl: '(min-width: 3072px), (min-height: 1308px)'
        // xxl: "(min-width: 2765px)"
      }
      const s = 's'
      const m = window.matchMedia(QUERIES.m).matches ? 'm' : null
      const l = window.matchMedia(QUERIES.l).matches ? 'l' : null
      const xl = window.matchMedia(QUERIES.xl).matches ? 'xl' : null
      const size = xl || l || m || s

      this.size = size
    },
    reportResolution: function() {
      console.debug('Picked resolution', this.size)
    }
  }
}
