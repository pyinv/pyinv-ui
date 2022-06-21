<template>
  <section class="section">
    <h1 class="title is-1">
      {{ asset.first_asset_code }}: {{ asset.asset_model.name }}
    </h1>
    {{ asset.state }}
  </section>
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
