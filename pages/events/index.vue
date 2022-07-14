<template>
  <page-layout title="Events">
    <template #content>
      <asset-event-table-with-search-filters />
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: 'Events | PyInv',
  },
  middleware: ['auth'],
}
</script>
