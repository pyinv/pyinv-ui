<template>
  <b-button
    tag="router-link"
    :to="{
      name: 'manufacturers-slug-edit',
      params: { slug: manufacturer.slug },
    }"
  >
    {{ text }}
  </b-button>
</template>

<script>
export default {
  props: {
    manufacturer: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      default: 'Edit Manufacturer',
    },
  },
}
</script>
