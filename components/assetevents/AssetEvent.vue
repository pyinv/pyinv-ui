<template>
  <div>
    <asset-move-event-card v-if="event.event_type == 'MV'" :event="event" />
    <asset-create-event-card v-if="event.event_type == 'CR'" :event="event" />
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
}
</script>
