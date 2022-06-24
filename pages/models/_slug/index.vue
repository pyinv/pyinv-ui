<template>
  <page-layout :title="assetModel.name">
    <template #breadcrumbs>
      <asset-model-breadcrumbs :model="assetModel" />
    </template>
    <template #buttons>
      <asset-model-edit-button :model="assetModel" />
      <asset-model-delete-button :model="assetModel" />
    </template>
    <template #content>
      <asset-table :model="assetModel.slug" />
    </template>
  </page-layout>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const assetModel = await $axios.$get('asset-models/' + params.slug)
    return { assetModel }
  },
}
</script>
