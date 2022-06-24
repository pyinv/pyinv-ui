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
      :default-sort="['name', 'asc']"
      @sort="onSort"
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
    </b-table>
    <b-message v-else type="is-danger" has-icon icon-size="small">
      No manufacturers found.
    </b-message>
  </section>
</template>

<script>
import ManufacturerLink from './ManufacturerLink.vue'
export default {
  components: { ManufacturerLink },
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
