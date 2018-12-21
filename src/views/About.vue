<template>
  <section class="about">
    <page-header :pageTitle="`Sobre o projeto`"/>

    <h3>O que é?</h3>
    <p><strong>WhatsApp URL</strong> é um simples WebApp desenvolvido por <a href="https://nandomoreira.me" target="_blank">nandomoreira.me</a> utilizando <a href="https://vuejs.org/" target="_blank">VueJS</a> como tecnologia e com o propósito de estudo. O código é open-source e pode ser encontrado no <a href="https://github.com/nandomoreirame/app-whatsapp-url" target="_blank">Github</a>.</p>

    <h3>Pra que?</h3>
    <p>O objetivo do <strong>WhatsApp URL</strong> é de poder enviar mensagem para um número sem ter a obrigação de adicioná-lo como contato da agenda telefônica.</p>

    <h3>Quem pode usar?</h3>
    <p>O <strong>WhatsApp URL</strong> pode ser utilizado por qualquer pessoa. Basta digitar o <strong>código do País</strong>, <strong>código de área</strong>, o <strong>número da pessoa</strong> e clicar no botão <strong>"Talk to me on WhatsApp"</strong></p>
  </section>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'About',
  components: {
    PageHeader
  }
}
</script>

<style lang="stylus" scoped>
p
  padding-bottom 1.875rem /* 30/16 */
  margin-bottom 1.875rem /* 30/16 */
  border-bottom 1px solid rgba(#333, .1)
a
  color #000
  text-decoration underline
  &:hover,
  &:focus
    opacity 0.65
    text-decoration none
</style>
