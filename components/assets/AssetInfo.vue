<template>
  <div class="box">
    <h4 class="title is-4">Asset Information</h4>
    <div class="columns has-text-centered">
      <div class="column">
        <h5 class="title is-5">Asset Model</h5>
        <p><asset-model-link-text :model="asset.asset_model" /></p>
        <h5 class="title is-5">Extra Data</h5>
        <asset-extra-data :asset="asset" />
      </div>
      <div class="column">
        <h5 class="title is-5">Last Updated</h5>
        <p>{{ asset.updated_at }}</p>
      </div>
      <div class="column">
        <h5 class="title is-5">Asset Codes</h5>
        <b-tag
          class="asset-code-tag"
          v-for="code in asset.asset_codes"
          :key="code"
          >{{ code }}</b-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.asset-code-tag {
  margin: 0.5em;
}
</style>
