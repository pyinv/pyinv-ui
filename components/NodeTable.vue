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
      :default-sort="['display_name', 'asc']"
      @sort="onSort"
    >
      <b-table-column field="display_name" label="Name" sortable v-slot="props">
        {{ props.row.display_name }}
      </b-table-column>

      <b-table-column
        field="numchild"
        label="Number of Children"
        numeric
        sortable
        v-slot="props"
      >
        <span class="tag">
          {{ props.row.numchild }}
        </span>
      </b-table-column>

      <b-table-column
        field="depth"
        label="Depth"
        numeric
        sortable
        v-slot="props"
      >
        {{ props.row.depth }}
      </b-table-column>

      <b-table-column label="Actions"> Bees </b-table-column>
    </b-table>
  </section>
</template>

<script>
export default {
  props: {
    parent: {
      type: String,
      required: true,
    },
    perPage: {
      type: Number,
      default: 25,
    },
    node_type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      data: [],
      total: 0,
      loading: false,
      sortString: 'name',
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
        .get('/nodes/', {
          params: {
            parent: this.parent,
            node_type: this.node_type,
            limit: this.perPage,
            offset: (this.page - 1) * this.perPage,
            ordering: this.sortString,
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
      if (field == 'display_name') {
        field = 'name'
      }

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
