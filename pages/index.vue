<template>
  <section class="section">
    <h1 class="title is-1">Assets</h1>
    <asset-table :nodes="nodes" />
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    var nodes = await $axios.$get('/nodes/?limit=30&parent=root&node_type=L&ordering=name');
    return { nodes }
  }
}
</script>
