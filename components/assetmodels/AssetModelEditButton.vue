<template>
  <b-button
    tag="router-link"
    :to="{
      name: 'models-slug-edit',
      params: { slug: model.slug },
    }"
  >
    {{ text }}
  </b-button>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      default: 'Edit Asset Model',
    },
  },
}
</script>
