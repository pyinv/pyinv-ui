<template>
  <page-layout :title="node.display_name">
    <template #pre-title><node-icon :node="node" />&nbsp;</template>
    <template #content>
      <node-info :node="node" />
      <asset-info v-if="node.asset" :asset="node.asset" />
      <div class="box" v-if="node.numchild > 0">
        <h4 class="title is-4">Contents</h4>
        <node-table :parent="node.id" />
      </div>
    </template>
    <template #breadcrumbs><node-breadcrumbs :node="node" /></template>
  </page-layout>
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
