<template>
  <section class="about">
    <page-header :pageTitle="`About this project`"/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi dignissimos aperiam, non est vitae repudiandae laboriosam reiciendis consequuntur temporibus dolores, neque tenetur perspiciatis placeat quis, officiis eum ad in tempora!</p>
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
