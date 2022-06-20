<template>
  <b-button
    tag="router-link"
    :to="{ name: 'assets-uuid', params: { uuid: asset.id } }"
    size="is-small"
  >
    {{ text || asset.first_asset_code }}
  </b-button>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
    },
  },
}
</script>
