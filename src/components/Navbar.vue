<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.navbar
  padding 30px 0
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
