<template>
  <section class="section">
    <h1 class="title is-1">Editing: {{ model.name }}</h1>
    <asset-model-breadcrumbs :model="model" action="Edit" />
    <asset-model-edit-form @success="submitted" :model="model" />
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  async asyncData({ $axios, params }) {
    const model = await $axios.$get(`asset-models/${params.slug}/`)
    return { model }
  },
  methods: {
    async submitted() {
      this.$router.push({
        name: 'models-slug',
        params: { slug: this.model.slug },
      })
    },
  },
}
</script>
