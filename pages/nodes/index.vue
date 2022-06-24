<template>
  <page-layout title="Assets">
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
