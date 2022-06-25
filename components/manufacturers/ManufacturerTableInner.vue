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
      <manufacturer-link :manufacturer="props.row" :button="false" />
    </b-table-column>

    <b-table-column label="Actions" v-slot="props">
      <manufacturer-link
        :manufacturer="props.row"
        text="View"
        size="is-small"
      />
      <manufacturer-link
        :manufacturer="props.row"
        text="Edit"
        size="is-small"
        action="edit"
      />
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
