<template>
  <page-layout title="Asset Models">
    <template #buttons><asset-model-create-modal /></template>
    <template #content>
      <asset-model-table />
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: 'Asset Models | PyInv',
  },
}
</script>
