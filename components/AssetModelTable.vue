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
      :default-sort="['name', 'asc']"
      @sort="onSort"
    >
      <b-table-column field="name" label="Name" sortable v-slot="props">
        <asset-model-link-text :model="props.row" />
      </b-table-column>

      <b-table-column field="manufacturer" label="Manufacturer" v-slot="props">
        <manufacturer-link-text :manufacturer="props.row.manufacturer" />
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
    </b-table>
  </section>
</template>

<script>
import AssetModelLinkText from './AssetModelLinkText.vue'
import ManufacturerLinkText from './ManufacturerLinkText.vue'
export default {
  components: { ManufacturerLinkText, AssetModelLinkText },
  props: {
    manufacturer: {
      type: Object,
      required: false,
      default: null,
    },
    perPage: {
      type: Number,
      default: 25,
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
        .get('/asset-models/', {
          params: {
            limit: this.perPage,
            offset: (this.page - 1) * this.perPage,
            ordering: this.sortString,

            // Filters
            manufacturer: this.manufacturer ? this.manufacturer.slug : null,
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
