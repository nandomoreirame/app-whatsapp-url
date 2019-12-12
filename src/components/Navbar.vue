<template>
  <nav>
    <div>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
nav
  margin-bottom 1.25rem /* 20/16 */
  border-top .3125rem /* 5/16 */ solid #42b983
  border-bottom .0625rem /* 1/16 */ solid rgba(#42b983, .2)
  text-align center
div
  padding 1.875rem /* 30/16 */ .9375rem /* 15/16 */
  max-width 22.5rem
  margin-right auto
  margin-left auto
a
  font-weight bold
  color #2c3e50
  display inline-block
  padding 0 15px
  text-transform uppercase
  letter-spacing -0.05rem
  &.router-link-exact-active
    color #42b983
</style>
