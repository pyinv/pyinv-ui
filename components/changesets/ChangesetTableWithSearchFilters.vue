<template>
  <section>
    <div class="field has-addons">
      <div class="control is-expanded">
        <b-input
          type="text"
          v-model="search"
          placeholder="Find a changeset"
          @keyup.native.enter="refresh"
        />
      </div>
      <div class="control">
        <b-button type="is-info" @click="refresh"> Search </b-button>
      </div>
    </div>
    <changeset-table-inner
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
  data() {
    return {
      data: [],
      total: 0,
      loading: false,
      sortString: '-timestamp',
      currentPage: 1,
      search: null,
    }
  },
  async fetch() {
    this.loading = true
    try {
      let resp = await this.$axios.get('/changesets/', {
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
  methods: {
    onPageChange(page) {
      this.currentPage = page
      this.refresh()
    },
    onSort(sortString) {
      this.sortString = sortString
      this.refresh()
    },
    refresh() {
      this.$fetch()
    },
  },
}
</script>
