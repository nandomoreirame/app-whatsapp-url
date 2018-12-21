<template>
  <header>
    <h1 v-text="pageTitle"/>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    'pageTitle': {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="stylus" scoped>
header
  padding-bottom 1.875rem /* 30/16 */
h1
  margin 0
  letter-spacing -0.05rem
</style>