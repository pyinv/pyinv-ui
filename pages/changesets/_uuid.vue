<template>
  <page-layout :title="changeset.display_name">
    <template #breadcrumbs
      ><changeset-breadcrumbs :changeset="changeset"
    /></template>
    <template #content>
      <changeset-info :changeset="changeset" />
      <simple-asset-event-table-inner :data="events.results" sortString="" />
    </template>
  </page-layout>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.changeset.display_name} | PyInv`,
    }
  },
  data: {
    currentPage: 1,
  },
  middleware: ['auth'],
  async asyncData({ $axios, params, redirect }) {
    const changeset = await $axios.$get('changesets/' + params.uuid)
    const events = await $axios.$get(`changesets/${params.uuid}/events`)
    return { changeset, events }
  },
  methods: {
    onPageChange() {
      this.$nuxt.refresh()
    },
  },
}
</script>
