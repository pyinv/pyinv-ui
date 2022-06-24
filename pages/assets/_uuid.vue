<template>
  <page-layout :title="`${asset.first_asset_code}: ${asset.asset_model.name}`">
    <template #breadcrumbs>Breadcrumbs Not Implemented</template>
    <template #content>
      {{ asset.state }}
    </template>
  </page-layout>
</template>

<script>
export default {
  async asyncData({ $axios, params, redirect }) {
    const asset = await $axios.$get('assets/' + params.uuid)
    if (asset.node && asset.node.numchild != 0) {
      redirect({ name: 'nodes-uuid', params: { uuid: asset.node.id } })
    }
    return { asset }
  },
}
</script>
