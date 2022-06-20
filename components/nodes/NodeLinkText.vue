<template>
  <router-link
    :to="{ name: 'nodes-uuid', params: { uuid: node.id } }"
    size="is-small"
  >
    <node-icon v-if="!text" :node="node" size="is-small" />
    {{ text || node.display_name }}
  </router-link>
</template>

<script>
import NodeIcon from './NodeIcon.vue'

export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
    },
  },
}
</script>
