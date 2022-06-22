<template>
  <section class="section">
    <h1 class="title is-1">Manufacturers</h1>
    <manufacturer-create-modal @manufacturerCreated="manufacturerCreated" />
    <manufacturer-table />
  </section>
</template>

<script>
export default {
  head: {
    title: 'Manufacturers | PyInv',
  },
  methods: {
    manufacturerCreated(slug) {
      this.$forceUpdate()
    },
  },
}
</script>
