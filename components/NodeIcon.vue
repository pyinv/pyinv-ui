<template>
  <b-icon :icon="icon" :size="size"> </b-icon>
</template>

<script>
export default {
  computed: {
    icon() {
      return this.node.node_type == 'A' ? 'cube' : 'folder'
    },
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: 'is-medium',
    },
  },
}
</script>
