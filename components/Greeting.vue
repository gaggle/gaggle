<template>
  <div class="greeting is-absolute-centered has-text-centered">
    <div class="is-size-5 is-size-3-tablet is-size-2-desktop is-size-1-fullhd has-text-weight-bold">
      Jon Lauridsen
    </div>
    <div class="is-size-6 is-size-4-tablet is-size-4-desktop is-size-3-fullhd">
      <div>I write testable code</div>
      <div class="has-big-gap">
        <a
          class="has-text-weight-bold"
          href="mailto:mail@jonlauridsen.com"
        >Say hi</a>, ping me on
        <a
          class="has-text-weight-bold"
          href="https://twitter.com/jonlauridsen"
        >Twitter</a>,
        <span class="force-newline">or check
          <a class="has-text-weight-bold" href="https://www.linkedin.com/in/jonlauridsen">LinkedIn</a> and
          <a class="has-text-weight-bold" href="https://github.com/gaggle">GitHub</a>.</span>
      </div>
    </div>
    <div />
  </div>
</template>

<style lang="sass">
.has-big-gap
  padding-top: 1rem

.greeting
  max-width: 40rem
  line-height: 1.1
  padding: 1.4em 1.8em

.force-newline
  display: table

.is-absolute-centered
  position: absolute
  top: 50%
  left: 50%
  margin-right: -50%
  transform: translate(-50%, -50%)
</style>
