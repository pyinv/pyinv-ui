<template>
  <page-layout title="Manufacturers">
    <template #buttons>
      <manufacturer-create-modal @manufacturerCreated="manufacturerCreated" />
    </template>
    <template #content>
      <manufacturer-table-with-search-filters ref="table" />
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: 'Manufacturers | PyInv',
  },
  methods: {
    manufacturerCreated() {
      this.$refs.table.refresh()
    },
  },
}
</script>
