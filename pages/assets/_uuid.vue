<template>
  <page-layout :title="`${asset.first_asset_code}: ${asset.asset_model.name}`">
    <template #breadcrumbs><asset-breadcrumbs :asset="asset" /></template>
    <template #content>
      {{ asset.state }}
    </template>
  </page-layout>
</template>

<script>
import AssetBreadcrumbs from '~/components/assets/AssetBreadcrumbs.vue'
export default {
  components: { AssetBreadcrumbs },
  async asyncData({ $axios, params, redirect }) {
    const asset = await $axios.$get('assets/' + params.uuid)
    if (asset.node && asset.node.numchild != 0) {
      redirect({ name: 'nodes-uuid', params: { uuid: asset.node.id } })
    }
    return { asset }
  },
}
</script>
