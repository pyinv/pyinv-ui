<template>
  <section>
    <b-table
      :data="data"
      :loading="loading"
      :total="total"
      :per-page="perPage"
      paginated
      backend-pagination
      @page-change="onPageChange"
      backend-sorting
      default-sort-direction="asc"
      :default-sort="['name', 'asc']"
      @sort="onSort"
    >
      <b-table-column field="name" label="Name" sortable v-slot="props">
        <router-link
          :to="{ name: 'manufacturers-slug', params: { slug: props.row.slug } }"
        >
          {{ props.row.name }}
        </router-link>
      </b-table-column>

      <b-table-column label="Actions" v-slot="props">
        <b-button
          size="is-small"
          tag="router-link"
          :to="{ name: 'manufacturers-slug', params: { slug: props.row.slug } }"
          >View</b-button
        >
        <b-button
          size="is-small"
          tag="router-link"
          :to="{
            name: 'manufacturers-slug-edit',
            params: { slug: props.row.slug },
          }"
          >Edit</b-button
        >
      </b-table-column>
    </b-table>
  </section>
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
    onSort(field, order) {
      if (order == 'asc') {
        var sortString = field
      } else {
        var sortString = '-' + field
      }
      this.$emit('onSort', sortString)
    },
  },
}
</script>
