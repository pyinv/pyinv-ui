<template>
  <p>{{ human_readable }}</p>
</template>

<script>
export default {
  props: {
    event_type: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    human_readable() {
      if (this.event_type == 'CR') {
        const location = this.formatLocation(this.data.location)
        return `Created with initial location ${location}`
      } else if (this.event_type == 'MV') {
        const oldLocation = this.formatLocation(this.data.old)
        const newLocation = this.formatLocation(this.data.new)
        return `Moved from ${oldLocation} to ${newLocation}.`
      } else {
        return 'Unable to render event data'
      }
    },
  },
  methods: {
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
>
