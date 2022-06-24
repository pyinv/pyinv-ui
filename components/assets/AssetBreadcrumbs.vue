<template>
  <section>
    <node-breadcrumbs v-if="asset.node" :node="asset.node" />
    <template v-else>
      <b-breadcrumb>
        <b-breadcrumb-item tag="router-link" :to="{ name: 'assets-unknown' }"
          >Unknown Assets</b-breadcrumb-item
        >
        <b-breadcrumb-item active
          >{{ asset.first_asset_code }}:
          {{ asset.asset_model.name }}</b-breadcrumb-item
        >
      </b-breadcrumb>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      required: true,
    },
    align: {
      type: String,
      default: 'is-left',
    },
  },
}
</script>
