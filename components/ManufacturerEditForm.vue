<template>
  <section>
    <b-field label="Name">
      <b-input v-model="manufacturer.name"></b-input>
    </b-field>
    <b-field label="Slug">
      <b-input v-model="manufacturer.slug" disabled></b-input>
    </b-field>
    <b-button @click="submit">Update</b-button>
  </section>
</template>

<script>
export default {
  props: {
    manufacturer: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async submit() {
      try {
        await this.$axios.put(
          `/manufacturers/${this.manufacturer.slug}/`,
          this.manufacturer
        )
        this.$buefy.toast.open({
          message: 'Updated successfully.',
          type: 'is-success',
        })
        this.$emit('success')
      } catch (error) {
        if (error.response) {
          this.$buefy.toast.open({
            message: error.response.data.detail,
            type: 'is-danger',
          })
        } else {
          this.$buefy.toast.open({
            message: error.message,
            type: 'is-danger',
          })
        }
      }
    },
  },
}
</script>
