<template>
  <b-breadcrumb :align="align" :size="size">
    <b-breadcrumb-item tag="router-link" :to="{ name: 'changesets' }"
      >Changesets</b-breadcrumb-item
    >
    <b-breadcrumb-item active>{{ changeset.display_name }}</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
export default {
  props: {
    changeset: {
      type: Object,
      required: true,
    },
    align: {
      type: String,
      default: 'is-left',
    },
    size: {
      type: String,
      default: 'is-medium',
    },
  },
}
</script>
