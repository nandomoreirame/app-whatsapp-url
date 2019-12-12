<template>
  <a
    class="whatsappButton"
    :class="{ isInvalid: !isValid }"
    :href="url"
    target="_blank"
  >
    <whatsapp-icon/>
    {{ text }}
  </a>
</template>

<script>
import WhatsappIcon from '@/components/WhatsappIcon.vue'

export default {
  name: 'WhatsappButton',
  props: {
    'isValid': {
      type: Boolean,
      default: false
    },
    'url': {
      type: String,
      require: true
    },
    'text': {
      type: String,
      default: 'Talk to me on WhatsApp'
    }
  },
  components: {
    WhatsappIcon
  }
}
</script>

<style lang="stylus" scoped>
.whatsappButton
  background #33d16b
  background linear-gradient(45deg, #33d16b, #5cda89)
  border none
  color #fff
  border-radius .25em
  padding 1.25rem /* 20/16 */
  text-align center
  float right
  cursor pointer
  appearance none
  line-height 1.3
  display inline-block
  width 100%
  font-weight 700
  text-decoration none
  font-size inherit

  &.isInvalid
    pointer-events none
    cursor not-allowed
    opacity .65

  &:focus,
  &:hover
    background-color #476996
    border-color #476996
    color #fff
    text-decoration none
    outline 0

  &:hover
    background #33d16b
    background linear-gradient(45deg, #5cda89, #33d16b)

  svg
    display inline-block
    vertical-align middle
    position relative
    top -1px

  span,
  svg
    margin-right 5px
    display inline-block
    vertical-align middle
    transition fill 0.1s cubic-bezier(0.02, 0.01, 0.47, 1), color 0.1s cubic-bezier(0.02, 0.01, 0.47, 1), stroke 0.1s cubic-bezier(0.02, 0.01, 0.47, 1)
</style>
