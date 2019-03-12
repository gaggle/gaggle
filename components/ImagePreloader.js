export default {
  props: {
    image: { type: String, required: true },
    fallback: { type: String, required: false }
  },
  data: () => ({
    cachedImages: {},
    imageObject: new Image(),
    loading: false
  }),
  beforeMount() {
    this.loadedImage = this.fallback
    this.imageObject = new Image()
  },
  mounted() {
    this.startPreload(this.imageObject)
  },
  beforeUpdate() {
    this.startPreload(this.imageObject)
  },
  methods: {
    startPreload(img) {
      if (this.cachedImages.hasOwnProperty(this.image)) {
        this.loadedImage = this.image
        return
      }
      img.onload = () => {
        this.loading = false
        this.loadedImage = this.image
        this.cachedImages[this.image] = true
        console.debug('Preloaded', this.loadedImage)
      }
      this.loading = true
      img.src = this.image
    }
  },
  render(h) {
    const children = this.$scopedSlots.default({
      loadedImage: this.loadedImage,
      loading: this.loading
    })
    return children.length > 1 ? h('div', children) : children
  }
}
