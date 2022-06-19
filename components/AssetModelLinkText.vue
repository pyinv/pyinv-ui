<template>
  <router-link :to="{ name: 'models-slug', params: { slug: model.slug } }">
    {{ model.name }}
  </router-link>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
}
</script>
