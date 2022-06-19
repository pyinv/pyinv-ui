<template>
  <section class="section">
    <h1 class="title is-1">
      {{ assetModel.name }}
    </h1>
    <asset-model-edit-button :model="assetModel" />
    <asset-model-delete-button :model="assetModel" />
  </section>
</template>

<script>
import AssetModelDeleteButton from '~/components/AssetModelDeleteButton.vue'
import AssetModelEditButton from '~/components/AssetModelEditButton.vue'
export default {
  components: { AssetModelDeleteButton, AssetModelEditButton },
  async asyncData({ $axios, params }) {
    const assetModel = await $axios.$get('asset-models/' + params.slug)
    return { assetModel }
  },
}
</script>
