<template>
  <table-inner
    :data="data"
    :sortString="sortString"
    :total="total"
    :currentPage="currentPage"
    defaultSort="name"
    :loading="loading"
    :perPage="perPage"
    @onSort="onSort"
    @onPageChange="onPageChange"
  >
    <b-table-column field="name" label="Name" sortable v-slot="props">
      <asset-model-link-text :model="props.row" />
    </b-table-column>

    <b-table-column field="manufacturer" label="Manufacturer" v-slot="props">
      <manufacturer-link
        :manufacturer="props.row.manufacturer"
        :button="false"
      />
    </b-table-column>

    <b-table-column
      field="is_container"
      label="Can Contain Items"
      v-slot="props"
    >
      {{ props.row.is_container ? 'Yes' : 'No' }}
    </b-table-column>

    <b-table-column
      field="asset_count"
      label="Number of Assets"
      sortable
      v-slot="props"
    >
      {{ props.row.asset_count }}
    </b-table-column>

    <b-table-column label="Actions" v-slot="props">
      <b-button
        size="is-small"
        tag="router-link"
        :to="{ name: 'models-slug', params: { slug: props.row.slug } }"
        >View</b-button
      >
      <b-button
        size="is-small"
        tag="router-link"
        :to="{
          name: 'models-slug-edit',
          params: { slug: props.row.slug },
        }"
        >Edit</b-button
      >
    </b-table-column>
  </table-inner>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    sortString: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 25,
    },
  },
  methods: {
    onPageChange(page) {
      this.$emit('onPageChange', page)
    },
    onSort(sortString) {
      this.$emit('onSort', sortString)
    },
  },
}
</script>
