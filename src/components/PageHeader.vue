<template>
  <header>
    <whatsapp-icon size="24" color="#42b983"/>
    <h1 v-text="pageTitle"/>
  </header>
</template>

<script>
import WhatsappIcon from '@/components/WhatsappIcon.vue'

export default {
  name: 'PageHeader',
  props: {
    'pageTitle': {
      type: String,
      require: true
    }
  },
  components: {
    WhatsappIcon
  }
}
</script>

<style lang="stylus" scoped>
header
  padding-bottom 1.875rem /* 30/16 */
  display flex
  align-items center
h1
  margin 0
  letter-spacing -0.05rem
  margin-left .625rem /* 10/16 */
  font-size 22px
</style>