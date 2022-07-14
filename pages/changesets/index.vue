<template>
  <page-layout title="Changesets">
    <template #content>
      <changeset-table-with-search-filters />
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: 'Changesets | PyInv',
  },
  middleware: ['auth'],
}
</script>
