<template>
  <b-button :type="type" @click="clicked">{{ text }}</b-button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  },
  methods: {
    clicked() {
      this.$buefy.toast.open({
        message: `The ${this.text} button isn't implemented yet :(`,
        type: 'is-danger',
      })
    },
  },
}
</script>
