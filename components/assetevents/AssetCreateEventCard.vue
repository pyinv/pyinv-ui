<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Created by {{ event.changeset.user.display_name }} @
        {{ event.changeset.timestamp }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>
          Created with initial location
          {{ event.event_data.location | formatLocation }} .
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
