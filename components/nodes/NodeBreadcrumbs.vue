<template>
  <b-breadcrumb :align="this.align">
    <b-breadcrumb-item tag="router-link" :to="{ name: 'nodes' }"
      >Assets</b-breadcrumb-item
    >
    <b-breadcrumb-item v-if="!node.ancestors">...</b-breadcrumb-item>
    <b-breadcrumb-item
      v-for="ancestor in ancestors"
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
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
    parent: {
      type: Object,
    },
    align: {
      type: String,
      default: 'is-left',
    },
  },
  computed: {
    ancestors() {
      // Check if we have information about the ancestors.
      if (this.node.ancestors) {
        return this.node.ancestors
      } else {
        return [this.node.parent]
      }
    },
  },
}
</script>
