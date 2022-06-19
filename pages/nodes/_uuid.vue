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
  async asyncData({ $axios, params }) {
    const node = await $axios.$get('nodes/' + params.uuid)
    return { node }
  },
}
</script>
