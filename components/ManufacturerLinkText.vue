<template>
  <router-link
    :to="{ name: 'manufacturers-slug', params: { slug: manufacturer.slug } }"
  >
    {{ manufacturer.name }}
  </router-link>
</template>

<script>
export default {
  props: {
    manufacturer: {
      type: Object,
      required: true,
    },
  },
}
</script>
