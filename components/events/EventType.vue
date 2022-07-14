<template>
  <span>{{ human_text }}</span>
</template>

<script>
export default {
  props: {
    event_type: {
      type: String,
      required: true,
    },
  },
  computed: {
    human_text() {
      const types = {
        CR: 'Created',
        MV: 'Moved',
      }
      return types[this.event_type]
    },
  },
}
</script>
