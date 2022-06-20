<template>
  <section class="section">
    <h1 class="title is-1">
      {{ manufacturer.name }}
    </h1>
    <manufacturer-edit-button :manufacturer="manufacturer" />
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
