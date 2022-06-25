<template>
  <span><node-icon :node="node" size="is-small" /> {{ text }}</span>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  computed: {
    text() {
      if (this.node.node_type == 'A') return 'Asset'
      if (this.node.node_type == 'L') return 'Location'
      return 'Unknown'
    },
  },
}
</script>
