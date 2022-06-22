<template>
  <section class="section">
    <h1 class="title is-1">Asset Models</h1>
    <asset-model-create-modal />
    <asset-model-table />
  </section>
</template>

<script>
import AssetModelCreateModal from '~/components/assetmodels/AssetModelCreateModal.vue'
export default {
  components: { AssetModelCreateModal },
  head: {
    title: 'Asset Models | PyInv',
  },
}
</script>
