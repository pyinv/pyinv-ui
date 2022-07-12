<template>
  <div>
    <b-message
      v-if="!$auth.loggedIn"
      type="is-danger"
      has-icon
      icon-size="small"
    >
      You need to log in to view the timeline.
    </b-message>
    <div v-else>
      <b-loading :is-full-page="false" v-model="loading"></b-loading>
      <div v-if="loading || total > 0">
        <asset-event v-for="event in data" :event="event" :key="event.id" />
        <b-pagination
          :total="total"
          v-model="currentPage"
          order="is-centered"
          @change="onPageChange"
        />
      </div>
      <b-message v-else type="is-danger" has-icon icon-size="small">
        No events found.
      </b-message>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      required: false,
      default: null,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      data: [],
      total: 0,
      loading: false,
      currentPage: 1,
    }
  },
  async fetch() {
    this.loading = true
    if (this.$auth.loggedIn) {
      try {
        let resp = await this.$axios.get('/asset-events/', {
          params: {
            limit: this.perPage,
            offset: (this.currentPage - 1) * this.perPage,
            ordering: '-changeset__timestamp',

            // Filters
            asset: this.asset ? this.asset.id : null,
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
    } else {
      this.loading = false
    }
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page
      this.$fetch()
    },
  },
}
</script>
