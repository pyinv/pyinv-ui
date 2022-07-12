<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Moved by {{ event.changeset.user.display_name }} @
        {{ event.changeset.timestamp }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>
          Moved from {{ event.event_data.old | formatLocation }} to
          {{ event.event_data.new | formatLocation }}.
        </p>
        <pre>{{ event.changeset.comment }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  filters: {
    formatLocation(location) {
      if (location) {
        return location.join('/')
      } else {
        return '??'
      }
    },
  },
}
</script>

<style lang="scss">
.card {
  margin-bottom: 0.5em;
}
</style>
