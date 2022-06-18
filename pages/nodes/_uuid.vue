<template>
  <section class="section">
    <h1 class="title is-1">
      {{ node.display_name }}
    </h1>
    <p v-if="node.asset" >{{ node.asset.first_asset_code }}</p>
    <node-breadcrumbs :node="node" />
    <node-info :node="node" />
    <node-table v-if="node.numchild > 0" :parent="node.id" />
  </section>
</template>

<script>
import NodeBreadcrumbs from '~/components/NodeBreadcrumbs.vue'
export default {
  components: { NodeBreadcrumbs },
  async asyncData({ $axios, params }) {
    const node = await $axios.$get('nodes/' + params.uuid)
    return { node }
  },
}
</script>
