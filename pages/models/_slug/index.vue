<template>
  <page-layout :title="assetModel.name">
    <template #breadcrumbs>
      <asset-model-breadcrumbs :model="assetModel" />
    </template>
    <template #buttons>
      <asset-model-edit-button :model="assetModel" text="Edit" />
      <asset-model-delete-button :model="assetModel" text="Delete" />
    </template>
    <template #content>
      <asset-table :model="assetModel.slug" />
    </template>
  </page-layout>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.assetModel.name} | PyInv`,
    }
  },
  async asyncData({ $axios, params }) {
    const assetModel = await $axios.$get('asset-models/' + params.slug)
    return { assetModel }
  },
}
</script>
