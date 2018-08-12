<template>
  <div class="App">
    <navbar/>
    <main class="container">
      <router-view/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style lang="stylus">
html,
body
  width 100%
  height 100%

html
  font-size 16px
  font-family sans-serif
  -webkit-text-size-adjust 100%
  -ms-text-size-adjust 100%
  box-sizing border-box

*, *:before, *:after
  box-sizing inherit

body
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 1rem
  color rgba(#2c3e50, .9)
  margin 0

code,
pre
  font-family monospace, serif
  font-size 1em

pre
  white-space pre
  white-space pre-wrap
  word-wrap break-word

small
  font-size 80%

button,
input,
select,
textarea
  font-family inherit
  font-size 100%
  margin 0

textarea
  vertical-align top

table
  border-collapse collapse
  border-spacing 0

a
  text-decoration none

hr
  border none
  border-bottom 1px solid #e0e0e0
  margin 30px 0

.container
  max-width 22.5rem
  margin-right auto
  margin-left auto
  padding-right 15px
  padding-left 15px
</style>
