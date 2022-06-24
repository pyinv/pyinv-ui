<template>
  <page-layout title="Manufacturers">
    <template #content>
      <manufacturer-table-with-search-filters />
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: 'Manufacturers | PyInv',
  },
}
</script>
