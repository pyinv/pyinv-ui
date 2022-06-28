<template>
  <page-layout :title="asset.display_name">
    <template #breadcrumbs><asset-breadcrumbs :asset="asset" /></template>
    <template #buttons>
      <placeholder-button text="Edit" type="is-primary" />
      <placeholder-button text="Move Here" type="is-info" />
      <placeholder-button text="Delete" type="is-danger" />
    </template>
    <template #content>
      <asset-info :asset="asset" />
    </template>
  </page-layout>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.asset.display_name} | PyInv`,
    }
  },
  async asyncData({ $axios, params, redirect }) {
    const asset = await $axios.$get('assets/' + params.uuid)
    if (asset.node && asset.node.numchild != 0) {
      redirect({ name: 'nodes-uuid', params: { uuid: asset.node.id } })
    }
    return { asset }
  },
}
</script>
