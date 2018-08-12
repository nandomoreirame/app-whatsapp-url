<template>
  <header class="PageHeader">
    <h1 class="PageHeader__title" v-text="pageTitle"/>
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
.PageHeader
  border-bottom 1px solid #e0e0e0
  padding-bottom 15px
  margin-bottom 15px
  &__title
    margin 0
</style>