<template>
  <section class="Home">
    <page-header :pageTitle="`WhatsApp URL`"/>
    <whatsapp-form/>
  </section>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import WhatsappForm from '@/components/WhatsappForm.vue'

export default {
  name: 'Home',
  components: {
    PageHeader,
    WhatsappForm
  }
}
</script>

<style lang="stylus">
</style>
