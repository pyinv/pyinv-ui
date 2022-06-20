<template>
  <b-button
    tag="router-link"
    :to="{ name: 'nodes-uuid', params: { uuid: node.id } }"
    size="is-small"
  >
    {{ text || node.display_name }}
  </b-button>
</template>

<script>
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
