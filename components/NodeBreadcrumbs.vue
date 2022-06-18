<template>
  <section>
    <b-breadcrumb :align="this.align">
      <b-breadcrumb-item tag="router-link" to="/"
        >Inventory</b-breadcrumb-item
      >
      <b-breadcrumb-item
        v-for="ancestor in node.ancestors"
        :key="ancestor.id"
        tag="router-link"
        :to="{ name: 'nodes-uuid', params: { uuid: ancestor.id } }"
        >{{ ancestor.display_name }}</b-breadcrumb-item
      >
      <b-breadcrumb-item
        tag="router-link"
        to="/documentation/breadcrumb"
        active
        >{{ node.display_name }}</b-breadcrumb-item
      >
    </b-breadcrumb>
  </section>
</template>

<script>
export default {
  props: {
    node: {
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
