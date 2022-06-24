<template>
  <div class="box">
    <div class="columns has-text-centered">
      <div class="column">
        <h5 class="title is-5">Asset Model</h5>
        <p><asset-model-link-text :model="asset.asset_model" /></p>
        <h5 class="title is-5">Extra Data</h5>
        <asset-extra-data :asset="asset" />
      </div>
      <div class="column">
        <h5 class="title is-5">State</h5>
        <p>{{ asset.state }}</p>
        <h5 class="title is-5">Last Updated</h5>
        <p>{{ asset.updated_at }}</p>
      </div>
      <div class="column">
        <h5 class="title is-5">Asset Codes</h5>
        <ul>
          <li v-for="code in asset.asset_codes" :key="code">{{ code }}</li>
        </ul>
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
