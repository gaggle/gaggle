<template>
  <footer class="footer" :class="{ active: isActive }">
    <div class="content has-text-centered">
      <a @click="isActive = ! isActive">
        Toggle
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="sass">
.footer
  position: fixed
  left: 0
  bottom: 0
  padding: 0
  height: 1.5rem
  width: 100%
  background-color: transparent
  background-image: none

.active
  height: 5rem
  background-color: white
</style>
