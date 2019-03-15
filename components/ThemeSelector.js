import filter from 'lodash/filter'
import keyBy from 'lodash/keyBy'
import merge from 'lodash/merge'

export default {
  props: {
    themes: { type: Array, required: true },
    userSelectedTheme: { type: String, required: false }
  },
  computed: {
    themesByName: function () {
      return keyBy(this.themes, o => o.name)
    }
  },
  data() {
    return {
      theme: undefined
    }
  },
  beforeMount: function () {
    this.userSelectedTheme
      ? this.pickTheme(this.userSelectedTheme)
      : this.pickRandomTheme()
  },
  render(h) {
    const children = this.$scopedSlots.default({ theme: this.theme })
    return children.length > 1 ? h('div', children) : children
  },
  methods: {
    pickRandomTheme: function () {
      const themes = filter(this.themes, o => !o.debug)
      const rand = Math.floor(Math.random() * themes.length)
      this.pickTheme(themes[rand].name)
    },
    pickTheme: function (name) {
      this.theme = merge(
        {
          ext: 'jpg',
          position: 'center center'
        },
        this.themesByName[name]
      )
      console.debug('Activated theme', JSON.parse(JSON.stringify(this.theme)))
    }
  }
}
