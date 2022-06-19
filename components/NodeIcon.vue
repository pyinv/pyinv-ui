<template>
  <b-icon :icon="icon" :size="size"> </b-icon>
</template>

<script>
export default {
  computed: {
    icon() {
      if (this.node.node_type == 'L') return 'folder'
  
      return this.node.is_container ? 'cube' : 'cube-outline'
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
