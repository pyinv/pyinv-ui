<template>
  <table-inner
    :data="data"
    :sortString="sortString"
    :total="total"
    :currentPage="currentPage"
    :loading="loading"
    :perPage="perPage"
    @onSort="onSort"
    @onPageChange="onPageChange"
  >
    <b-table-column field="timestamp" label="Timestamp" sortable v-slot="props">
      {{ props.row.timestamp }}
    </b-table-column>

    <b-table-column field="user" label="User" v-slot="props">
      {{ props.row.user.display_name }}
    </b-table-column>

    <b-table-column field="comment" label="Comment" v-slot="props">
      {{ props.row.comment | trunc }}
    </b-table-column>

    <b-table-column
      field="event_count"
      label="Number of Events"
      sortable
      v-slot="props"
    >
      {{ props.row.event_count }}
    </b-table-column>

    <b-table-column label="Actions" v-slot="props">
      <b-button
        size="is-small"
        tag="router-link"
        :to="{ name: 'changesets-uuid', params: { uuid: props.row.id } }"
        >View</b-button
      >
    </b-table-column>
  </table-inner>
</template>

<script>
import _ from 'lodash'

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
    onSort(sortString) {
      this.$emit('onSort', sortString)
    },
  },
  filters: {
    trunc(str, len = 80) {
      _.trim(str)
      return _.truncate(str, { length: len })
    },
  },
}
</script>
