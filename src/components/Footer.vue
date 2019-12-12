<template>
  <footer>
    <small>
      <span>♥</span> <a href="https://github.com/nandomoreirame/app-whatsapp-url" target="_blank">Open source</a> ⏤
      <span>by</span> <a href="https://nandomoreira.dev?ref=app-whatsapp-url" target="_blank">nandomoreira.dev</a>
    </small>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
footer
  background-color darken(#fff, 4%)
  padding .9375rem /* 15/16 */ 0
  text-align center
  width 100%
  @media (min-width: 420px)
    right 0
    bottom 0
    left 0
    position fixed
a, span, small
  display inline-block
  padding 0
  margin 0 .25rem /* 4/16 */
a
  border-bottom 1px solid #676767
  &:hover,
  &:focus
    opacity 0.65
</style>
