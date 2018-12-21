<template>
	<div>
    <div class="form-group">
      <label>Telefone</label>
      <vue-tel-input v-model="phone" @onInput="changeUrl"/>
    </div>
    <div class="form-group">
      <label for="WhatsappText">Mensagem</label>
      <textarea id="WhatsappText" v-model="text" @input="changeUrl"/>
    </div>
    <hr/>
    <div class="form-group">
      <whatsapp-button :url="url" text="Fale comigo no WhatsApp!"/>
    </div>
	</div>
</template>

<script>
import 'vue-tel-input/dist/vue-tel-input.css'
import WhatsappButton from '@/components/WhatsappButton.vue'

const whatsappUrl = require('whatsapp-url')

export default {
  data () {
    return {
      code: '55',
      phone: '41984401163',
      text: `It's me Mario!`,
      url: ''
    }
  },
  components: {
    WhatsappButton
  },
  mounted () {
    this.changeUrl()
  },
  methods: {
    changeUrl () {
      const hasCode = this.phone.length > 11
      const phone = `${ (!hasCode) ? this.code : '' }${this.phone.replace('+', '')}`
      this.url = whatsappUrl({ phone, text: this.text, isWeb: false })
    }
  }
}
</script>

<style lang="stylus">
.form-group
  margin-bottom .9375rem /* 15/16 */
  label
    display block
    margin-bottom .3125rem /* 5/16 */

textarea
  border-radius 3px
  display -webkit-box
  display -ms-flexbox
  display flex
  border 1px solid #bbb
  text-align left
  width 100%
  outline none
  padding .4375rem /* 7/16 */ .875rem /* 14/16 */
  resize none
  height 6.25rem /* 100/16 */
  &:focus
    box-shadow inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)
    border-color #66afe9
    outline 0
</style>