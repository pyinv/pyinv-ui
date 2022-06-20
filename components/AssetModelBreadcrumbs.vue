<template>
  <section>
    <b-breadcrumb :align="align" :size="size">
      <b-breadcrumb-item tag="router-link" :to="{ name: 'models' }"
        >Asset Models</b-breadcrumb-item
      >
      <template v-if="action">
        <b-breadcrumb-item
          tag="router-link"
          :to="{ name: 'models-slug', params: { slug: model.slug } }"
          >{{ model.name }}</b-breadcrumb-item
        >
        <b-breadcrumb-item active>{{ action }}</b-breadcrumb-item>
      </template>
      <b-breadcrumb-item v-else active>{{ model.name }}</b-breadcrumb-item>
    </b-breadcrumb>
  </section>
</template>

<script>
export default {
  props: {
    model: {
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
