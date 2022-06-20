<template>
  <b-button
    tag="router-link"
    :to="{
      name: 'manufacturers-create',
    }"
  >
    {{ text }}
  </b-button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Create Manufacturer',
    },
  },
}
</script>
