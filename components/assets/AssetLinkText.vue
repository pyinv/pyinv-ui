<template>
  <router-link
    :to="{ name: 'assets-uuid', params: { uuid: asset.id } }"
    size="is-small"
  >
    <b-icon v-if="icon" icon="cube-outline" size="is-small" />{{
      text || asset.display_name
    }}
  </router-link>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      required: true,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
  },
}
</script>
