<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      required: true,
    },
  },
  computed: {
    text() {
      switch (this.state) {
        case 'L':
          return 'Lost'
        case 'D':
          return 'Disposed'
        case 'K':
          return 'Known'
        default:
          return 'Unrecognised State'
      }
    },
  },
}
</script>
