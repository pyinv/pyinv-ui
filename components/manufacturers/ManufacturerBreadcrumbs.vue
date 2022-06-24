<template>
  <section>
    <b-breadcrumb :align="align" :size="size">
      <b-breadcrumb-item tag="router-link" :to="{ name: 'manufacturers' }"
        >Manufacturers</b-breadcrumb-item
      >
      <b-breadcrumb-item v-if="!action" active>{{
        manufacturer.name
      }}</b-breadcrumb-item>
      <template v-else>
        <b-breadcrumb-item
          tag="router-link"
          :to="{
            name: 'manufacturers-slug',
            params: { slug: manufacturer.slug },
          }"
          >{{ manufacturer.name }}</b-breadcrumb-item
        >
        <b-breadcrumb-item active>{{ action }}</b-breadcrumb-item>
      </template>
    </b-breadcrumb>
  </section>
</template>

<script>
export default {
  props: {
    manufacturer: {
      type: Object,
      required: true,
    },
    action: {
      type: String,
    },
    align: {
      type: String,
      default: 'is-left',
    },
    size: {
      type: String,
      default: 'is-medium',
    },
  },
}
</script>
