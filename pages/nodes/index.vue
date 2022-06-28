<template>
  <page-layout title="Assets">
    <template #buttons
      ><placeholder-button
        type="is-success"
        icon="folder-plus"
        text="New Location"
    /></template>
    <template #content>
      <node-table parent="root" />
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: 'Assets | PyInv',
  },
}
</script>
