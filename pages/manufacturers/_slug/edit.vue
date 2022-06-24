<template>
  <section class="section">
    <h1 class="title is-1">Editing: {{ manufacturer.name }}</h1>
    <manufacturer-link :manufacturer="manufacturer" text="Back" />
    <manufacturer-edit-form @success="submitted" :manufacturer="manufacturer" />
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
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
