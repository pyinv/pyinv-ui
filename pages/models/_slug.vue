<template>
  <section class="section">
    <h1 class="title is-1">
      {{ assetModel.name }}
    </h1>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const assetModel = await $axios.$get('asset-models/' + params.slug)
    return { assetModel }
  },
}
</script>
