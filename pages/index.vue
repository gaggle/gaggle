<template>
  <ThemeSelector v-if="responseData" v-slot="{theme}" :themes="responseData.themes" :user-selected-theme="query.theme">
    <ResolutionPicker v-slot="{size}">
      <ImagePreloader v-slot="{loadedImage, loading}" :image="`${theme.name}.${size}.${theme.ext}`" :fallback="`${theme.name}.thumb.${theme.ext}`">
        <FullscreenBackground :image="loadedImage" :position="theme.position">
          <div v-if="loading" class="loader is-size-5 is-size-3-tablet is-size-2-desktop is-size-1-fullhd" />
          <main>
            <section class="section">
              <Greeting :style="theme.style" />
            </section>
          </main>
        </FullscreenBackground>
      </ImagePreloader>
    </ResolutionPicker>
  </ThemeSelector>
  <h1 v-else>
    Loading theme data...
  </h1>
</template>

<script>
import FullscreenBackground from '~/components/FullscreenBackground.vue'
import Greeting from '~/components/Greeting.vue'
import ImagePreloader from '~/components/ImagePreloader'
import ResolutionPicker from '~/components/ResolutionPicker'
import ThemeSelector from '~/components/ThemeSelector'

export default {
  components: {
    FullscreenBackground,
    Greeting,
    ImagePreloader,
    ResolutionPicker,
    ThemeSelector
  },
  data: () => ({
    responseData: null
  }),
  computed: {
    query: function() {
      return this.$route.query
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      console.debug('Getting data')
      this.$axios
        .get('/data.json')
        .then(({ data }) => {
          console.debug('Got data', JSON.parse(JSON.stringify(data)))
          this.responseData = data
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
