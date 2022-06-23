<template>
  <section class="section">
    <h1 class="title is-1">Assets</h1>
    <node-table parent="root" />
  </section>
</template>

<script>
import ManufacturerInput from '~/components/manufacturers/ManufacturerInput.vue'
export default {
  components: { ManufacturerInput },
  head: {
    title: 'Assets | PyInv',
  },
}
</script>
