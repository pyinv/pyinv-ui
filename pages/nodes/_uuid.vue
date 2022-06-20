<template>
  <section class="section">
    <h1 class="title is-1">
      <node-icon :node="node" />&nbsp;{{ node.display_name }}
    </h1>
    <node-breadcrumbs :node="node" />
    <node-info :node="node" />
    <node-table v-if="node.numchild > 0" :parent="node.id" />
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params, redirect }) {
    const node = await $axios.$get('nodes/' + params.uuid)
    if (node.node_type == 'A' && node.numchild == 0) {
      redirect({ name: 'assets-uuid', params: { uuid: node.asset.id } })
    }
    return { node }
  },
}
</script>
