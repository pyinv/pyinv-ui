<template>
  <page-layout :title="`Editing: ${manufacturer.name}`">
    <template #breadcrumbs>
      <manufacturer-breadcrumbs :manufacturer="manufacturer" action="Edit" />
    </template>
    <template #content>
      <manufacturer-edit-form
        @success="submitted"
        :manufacturer="manufacturer"
      />
    </template>
  </page-layout>
</template>

<script>
export default {
  middleware: ['auth'],
  head() {
    return {
      title: `Editing: ${this.manufacturer.name} | PyInv`,
    }
  },
  async asyncData({ $axios, params }) {
    const manufacturer = await $axios.$get('manufacturers/' + params.slug)
    return { manufacturer }
  },
  methods: {
    async submitted() {
      this.$router.push({
        name: 'manufacturers-slug',
        params: { slug: this.manufacturer.slug },
      })
    },
  },
}
</script>
