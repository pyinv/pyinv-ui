<template>
  <section class="section">
    <h1 class="title is-1">
      {{ manufacturer.name }}
    </h1>
    <asset-model-table :manufacturer="manufacturer"/>
  </section>
</template>

<script>
import AssetModelTable from '~/components/AssetModelTable.vue'
export default {
    async asyncData({ $axios, params }) {
        const manufacturer = await $axios.$get("manufacturers/" + params.slug);
        return { manufacturer };
    },
    components: { AssetModelTable }
}
</script>
