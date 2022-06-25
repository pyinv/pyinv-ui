<template>
  <asset-model-table-inner
    :data="data"
    :total="total"
    :loading="loading"
    :sortString="sortString"
    :perPage="perPage"
    :currentPage="currentPage"
    @onPageChange="onPageChange"
    @onSort="onSort"
  />
</template>

<script>
export default {
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
      currentPage: 1,
    }
  },
  async fetch() {
    this.loading = true
    try {
      let resp = await this.$axios.get('/asset-models/', {
        params: {
          limit: this.perPage,
          offset: (this.currentPage - 1) * this.perPage,
          ordering: this.sortString,

          // Filters
          manufacturer: this.manufacturer ? this.manufacturer.slug : null,
        },
      })
      this.data = resp.data.results
      this.total = resp.data.count
      this.loading = false
    } catch (error) {
      this.$buefy.toast.open({
        message: error.message,
        type: 'is-danger',
      })
    }
  },
  methods: {
    onPageChange(page) {
      this.page = page
      this.$fetch()
    },
    onSort(sortString) {
      this.sortString = sortString
      this.$fetch()
    },
  },
}
</script>
