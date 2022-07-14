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
    <b-table-column field="event_type" label="Type" v-slot="props">
      <event-type :event_type="props.row.event_type" />
    </b-table-column>

    <b-table-column field="asset" label="Asset" v-slot="props">
      <asset-link-text :asset="props.row.asset" />
    </b-table-column>

    <b-table-column field="event_data" label="Description" v-slot="props">
      <event-data
        :data="props.row.event_data"
        :event_type="props.row.event_type"
      />
    </b-table-column>
  </table-inner>
</template>

<script>
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
}
</script>
