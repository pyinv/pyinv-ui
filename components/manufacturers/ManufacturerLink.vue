<template>
  <router-link
    :to="{ name: viewName, params: { slug: manufacturer.slug } }"
    :class="[{ button: button }, size]"
  >
    {{ text || manufacturer.name }}
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
    manufacturer: {
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
        return 'manufacturers-slug-edit'
      } else {
        return 'manufacturers-slug'
      }
    },
  },
}
</script>
