<template>
  <page-layout :title="manufacturer.name">
    <template #breadcrumbs>
      <manufacturer-breadcrumbs :manufacturer="manufacturer" />
    </template>
    <template #buttons>
      <manufacturer-link
        :manufacturer="manufacturer"
        text="Edit"
        action="edit"
      />
      <manufacturer-delete-button :manufacturer="manufacturer" />
    </template>
    <template #content>
      <asset-model-table :manufacturer="manufacturer" />
    </template>
  </page-layout>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.manufacturer.name} | PyInv`,
    }
  },
  async asyncData({ $axios, params }) {
    const manufacturer = await $axios.$get('manufacturers/' + params.slug)
    return { manufacturer }
  },
}
</script>
