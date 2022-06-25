<template>
  <page-layout title="Asset Models">
    <template #buttons
      ><asset-model-create-modal @modelCreated="modelCreated"
    /></template>
    <template #content>
      <asset-model-table-with-search-filters ref="table" />
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: 'Asset Models | PyInv',
  },
  methods: {
    modelCreated() {
      this.$refs.table.refresh()
    },
  },
}
</script>
