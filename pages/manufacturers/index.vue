<template>
  <section class="section">
    <h1 class="title is-1">Manufacturers</h1>
    <manufacturer-create-button />
    <manufacturer-table />
  </section>
</template>

<script>
import ManufacturerCreateButton from '~/components/ManufacturerCreateButton.vue'
export default {
  head: {
    title: 'Manufacturers | PyInv',
  },
}
</script>
