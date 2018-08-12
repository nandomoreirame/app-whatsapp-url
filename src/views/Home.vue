<template>
  <section class="Home">
    <page-header :pageTitle="`Whatsapp url`"/>
    <div class="form-group">
      <label>Phone number</label>
      <vue-tel-input v-model="phone" @onInput="changeUrl"/>
    </div>
    <div class="form-group">
      <label for="WhatsappText">Message text</label>
      <input type="text" id="WhatsappText" v-model="text" @input="changeUrl"/>
    </div>
    <div class="form-group">
      <label for="isWeb">
        <input type="checkbox" id="isWeb" v-model="isWeb" @input="changeUrl"/> WhatsApp Web?
      </label>
    </div>
    <hr/>
    <div class="form-group">
      <whatsapp-button :url="url"/>
    </div>
  </section>
</template>

<script>
import 'vue-tel-input/dist/vue-tel-input.css'
import PageHeader from '@/components/PageHeader.vue'
import WhatsappButton from '@/components/WhatsappButton.vue'

const whatsappUrl = require('whatsapp-url')

export default {
  name: 'Home',
  data () {
    return {
      code: '55',
      phone: '41984401163',
      text: `It's me Mario!`,
      isWeb: false,
      url: ''
    }
  },
  components: {
    PageHeader,
    WhatsappButton
  },
  mounted () {
    this.changeUrl()
  },
  methods: {
    changeUrl () {
      const hasCode = this.phone.length > 11
      const phone = `${ (!hasCode) ? this.code : '' }${this.phone.replace('+', '')}`
      this.url = whatsappUrl({ phone, text: this.text, isWeb: this.isWeb })
    }
  }
}
</script>

<style lang="stylus">
.Home
  padding-bottom 30px
  overflow hidden

.form-group
  margin-bottom 15px
  label
    display block
    margin-bottom 5px

input[type="text"]
  border-radius 3px
  display -webkit-box
  display -ms-flexbox
  display flex
  border 1px solid #bbb
  text-align left
  width 100%
  outline none
  padding 7px 14px
  &:focus
    box-shadow inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)
    border-color #66afe9
    outline 0
</style>
