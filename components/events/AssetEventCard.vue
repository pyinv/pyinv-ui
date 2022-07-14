<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <router-link
          :to="{
            name: 'changesets-uuid',
            params: { uuid: event.changeset.id },
          }"
          ><event-type :event_type="event.event_type" /> by
          {{ event.changeset.user.display_name }} @
          {{ event.changeset.timestamp }}</router-link
        >
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <event-data :data="event.event_data" :event_type="event.event_type" />
        <pre>{{ event.changeset.comment }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import EventData from './EventData.vue'
import EventType from './EventType.vue'
export default {
  components: { EventType, EventData },
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
