<template>
  <section>
    <b-breadcrumb :align="this.align">
      <b-breadcrumb-item tag="router-link" to="/">Inventory</b-breadcrumb-item>
      <b-breadcrumb-item
        v-for="ancestor in node.ancestors"
        :key="ancestor.id"
        tag="router-link"
        :to="{ name: 'nodes-uuid', params: { uuid: ancestor.id } }"
        ><node-icon :node="ancestor" size="is-small" />{{
          ancestor.display_name
        }}</b-breadcrumb-item
      >
      <b-breadcrumb-item active
        ><node-icon :node="node" size="is-small" />{{
          node.display_name
        }}</b-breadcrumb-item
      >
    </b-breadcrumb>
  </section>
</template>

<script>
import NodeIcon from './NodeIcon.vue'
export default {
  components: { NodeIcon },
  props: {
    node: {
      type: Object,
      required: true,
    },
    align: {
      type: String,
      default: 'is-left',
    },
  },
}
</script>
