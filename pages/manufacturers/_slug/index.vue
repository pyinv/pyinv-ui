<template>
  <section class="section">
    <manufacturer-breadcrumbs :manufacturer="manufacturer" />
    <h1 class="title is-1">
      {{ manufacturer.name }}
    </h1>
    <manufacturer-link :manufacturer="manufacturer" text="Edit" action="edit" />
    <manufacturer-delete-button :manufacturer="manufacturer" />
    <asset-model-table :manufacturer="manufacturer" />
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const manufacturer = await $axios.$get('manufacturers/' + params.slug)
    return { manufacturer }
  },
}
</script>
