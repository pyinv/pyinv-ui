<template>
  <router-link
    :to="{ name: viewName, params: { uuid: node.id } }"
    :class="[{ button: button }, size]"
  >
    <node-icon v-if="!text && !button" :node="node" size="is-small" />
    {{ text || node.display_name }}
  </router-link>
</template>

<script>
export default {
  props: {
    button: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: null,
    },
    action: {
      type: String,
      default: 'view',
    },
    node: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
    },
  },
  computed: {
    viewName() {
      if (this.action == 'edit') {
        return 'nodes-uuid-edit'
      } else {
        return 'nodes-uuid'
      }
    },
  },
}
</script>
