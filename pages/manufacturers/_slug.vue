<template>
  <section class="section">
    <h1 class="title is-1">
      {{ manufacturer.name }}
    </h1>
    <manufacturer-delete-button :manufacturer="manufacturer" />
    <asset-model-table :manufacturer="manufacturer" />
  </section>
</template>

<script>
import AssetModelTable from '~/components/AssetModelTable.vue'
import ManufacturerDeleteButton from '~/components/ManufacturerDeleteButton.vue'
export default {
  async asyncData({ $axios, params }) {
    const manufacturer = await $axios.$get('manufacturers/' + params.slug)
    return { manufacturer }
  },
  components: { AssetModelTable, ManufacturerDeleteButton },
}
</script>
