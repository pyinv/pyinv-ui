<template>
  <section>
    <b-table
      v-if="data.length > 0 || loading"
      :data="data"
      :loading="loading"
      :total="total"
      :per-page="perPage"
      paginated
      backend-pagination
      @page-change="onPageChange"
      backend-sorting
      default-sort-direction="asc"
      :default-sort="[defaultSort, 'asc']"
      @sort="onSort"
    >
      <slot />
    </b-table>
    <b-message v-else type="is-danger" has-icon icon-size="small">
      No results found.
    </b-message>
  </section>
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
    currentPage: {
      type: Number,
      required: true,
    },
    defaultSort: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
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
    onSort(field, order) {
      if (order == 'asc') {
        var sortString = field
      } else {
        var sortString = '-' + field
      }
      this.$emit('onSort', sortString)
    },
  },
}
</script>
