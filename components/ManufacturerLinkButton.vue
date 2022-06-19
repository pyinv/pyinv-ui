<template>
  <b-button
    tag="router-link"
    :to="{ name: 'manufacturers-slug', params: { slug: manufacturer.slug } }"
  >
    {{ text || manufacturer.name }}
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
    },
  },
}
</script>
