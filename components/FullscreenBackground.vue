<template>
  <div
    class="fullscreen cover"
    :style="{ backgroundImage: `url(${image})`, backgroundPosition: position }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, required: true },
    position: { type: String, default: 'center center' }
  }
}
</script>

<style lang="sass">
  .fullscreen
    position: absolute
    overflow: hidden
    min-height: 100vh
    width: 100vw
    left: 0
    top: 0

  .cover
    background-size: cover
</style>
