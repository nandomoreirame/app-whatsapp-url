<template>
  <footer>
    <small>
      ♥︎ <a href="https://github.com/nandomoreirame/whatsapp-url" target="_blank">Open source</a> ⏤
      by <a href="https://nandomoreira.me" target="_blank">nandomoreira.me</a>
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
  text-align center
  position fixed
  padding 15px 0
  right 0
  bottom 0
  left 0
  a
    border-bottom 1px solid #676767
    &:hover,
    &:focus
      opacity 0.65
</style>