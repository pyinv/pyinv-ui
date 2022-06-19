<template>
  <section class="section">
    <h1 class="title is-1">Create new Manufacturer</h1>
    <manufacturer-create-form @success="succeeded" />
  </section>
</template>

<script>
export default {
  head: {
    title: 'Create new Manufacturer | PyInv',
  },
  methods: {
    async succeeded(slug) {
      this.$router.push({
        name: 'manufacturers-slug',
        params: { slug },
      })
    },
  },
}
</script>
