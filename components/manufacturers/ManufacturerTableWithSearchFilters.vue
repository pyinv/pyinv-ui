<template>
  <section>
    <div class="field has-addons">
      <div class="control is-expanded">
        <b-input
          type="text"
          v-model="search"
          placeholder="Find a manufacturer"
          @keyup.native.enter="refresh"
        />
      </div>
      <div class="control">
        <b-button type="is-info" @click="refresh"> Search </b-button>
      </div>
    </div>
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
  </section>
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
          search: this.search,
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
      search: null,
    }
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
      this.$fetch()
    },
    onSort(sortString) {
      this.sortString = sortString
      this.$fetch()
    },
    refresh() {
      this.$fetch()
    },
  },
}
</script>
