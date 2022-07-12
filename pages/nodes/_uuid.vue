<template>
  <page-layout :title="node.display_name">
    <template #pre-title><node-icon :node="node" />&nbsp;</template>
    <template #buttons>
      <placeholder-button
        v-if="!node.asset"
        type="is-success"
        text="New Location"
      />
      <placeholder-button text="Edit" type="is-primary" />
      <placeholder-button text="Move Here" type="is-info" />
      <placeholder-button text="Delete" type="is-danger" />
    </template>
    <template #content>
      <node-info :node="node" />
      <b-tabs>
        <b-tab-item label="Contents" v-if="node.numchild > 0">
          <div class="box">
            <h4 class="title is-4">Contents</h4>
            <node-table :parent="node.id" />
          </div>
        </b-tab-item>
        <b-tab-item label="Asset" v-if="node.asset">
          <asset-info :asset="node.asset" />
        </b-tab-item>
        <b-tab-item label="Timeline" v-if="node.asset">
          <timeline :asset="node.asset" />
        </b-tab-item>
      </b-tabs>
    </template>
    <template #breadcrumbs><node-breadcrumbs :node="node" /></template>
  </page-layout>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.node.display_name} | PyInv`,
    }
  },
  async asyncData({ $axios, params, redirect }) {
    const node = await $axios.$get('nodes/' + params.uuid)
    if (node.node_type == 'A' && node.numchild == 0) {
      redirect({ name: 'assets-uuid', params: { uuid: node.asset.id } })
    }
    return { node }
  },
}
</script>
