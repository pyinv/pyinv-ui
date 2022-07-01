<template>
  <section>
    <b-table
      :data="data"
      :loading="loading"
      paginated
      backend-pagination
      :total="total"
      :per-page="perPage"
      @page-change="onPageChange"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      backend-sorting
      default-sort-direction="asc"
      :default-sort="['updated_at', 'asc']"
      @sort="onSort"
    >
      <b-table-column
        field="first_asset_code"
        label="Asset Code"
        v-slot="props"
      >
        {{ props.row.first_asset_code }}
      </b-table-column>

      <b-table-column field="asset_model" label="Asset Model" v-slot="props">
        <asset-model-link-text :model="props.row.asset_model" />
      </b-table-column>

      <b-table-column
        v-if="showLocationColumn"
        field="node"
        label="Location"
        v-slot="props"
      >
        <node-link
          v-if="props.row.node && props.row.node.parent"
          :button="false"
          :node="props.row.node.parent"
        />
        <template v-else>N/A</template>
      </b-table-column>

      <b-table-column
        field="updated_at"
        label="Last Updated"
        v-slot="props"
        sortable
      >
        {{ props.row.updated_at }}
      </b-table-column>

      <b-table-column label="Actions" v-slot="props">
        <node-link
          v-if="props.row.node && props.row.node.numchild > 0"
          :node="props.row.node"
          text="View"
        />
        <asset-link-button v-else :asset="props.row" text="View" />
      </b-table-column>
    </b-table>
  </section>
</template>

<script>
export default {
  props: {
    perPage: {
      type: Number,
      default: 25,
    },
    hasNode: {
      type: Boolean,
      default: null,
    },
    model: {
      type: String,
      default: '',
    },
    showLocationColumn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      data: [],
      total: 0,
      loading: false,
      sortString: 'updated_at',
      page: 1,
    }
  },
  methods: {
    /*
     * Load async data
     */
    async loadAsyncData() {
      this.loading = true
      await this.$axios
        .get('/assets/', {
          params: {
            asset_model: this.model,
            limit: this.perPage,
            offset: (this.page - 1) * this.perPage,
            ordering: this.sortString,
            has_node: this.hasNode,
          },
        })
        .then((response) => {
          this.data = response.data.results
          this.total = response.data.count
        })
        .catch((error) => {
          this.data = []
          this.total = 0
          this.loading = false
          throw error
        })
        .finally(() => {
          this.loading = false
        })
    },
    /*
     * Handle page-change event
     */
    onPageChange(page) {
      this.page = page
      console.log(page)
      this.loadAsyncData()
    },
    /*
     * Handle sort event
     */
    onSort(field, order) {
      if (order == 'asc') {
        this.sortString = field
      } else {
        this.sortString = '-' + field
      }
      this.loadAsyncData()
    },
  },
  mounted() {
    this.loadAsyncData()
  },
}
</script>
