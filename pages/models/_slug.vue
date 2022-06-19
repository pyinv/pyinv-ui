<template>
  <section class="section">
    <h1 class="title is-1">
      {{ assetModel.name }}
    </h1>
    <asset-model-delete-button :model="assetModel" />
  </section>
</template>

<script>
import AssetModelDeleteButton from '~/components/AssetModelDeleteButton.vue'
export default {
  components: { AssetModelDeleteButton },
  async asyncData({ $axios, params }) {
    const assetModel = await $axios.$get('asset-models/' + params.slug)
    return { assetModel }
  },
}
</script>
