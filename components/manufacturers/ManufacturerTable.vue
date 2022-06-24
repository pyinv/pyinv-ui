<template>
  <manufacturer-table-inner
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
    perPage: {
      type: Number,
      default: 25,
    },
  },
  async fetch() {
    this.loading = true
    try {
      let resp = await this.$axios.get('/manufacturers/', {
        params: {
          limit: this.perPage,
          offset: (this.currentPage - 1) * this.perPage,
          ordering: this.sortString,
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
  data() {
    return {
      data: [],
      total: 0,
      loading: true,
      sortString: 'name',
      currentPage: 1,
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
