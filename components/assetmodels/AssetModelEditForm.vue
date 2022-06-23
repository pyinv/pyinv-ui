<template>
  <section>
    <b-field label="Name">
      <b-input v-model="model.name"></b-input>
    </b-field>
    <b-field label="Slug">
      <b-input v-model="model.slug" disabled></b-input>
    </b-field>
    <manufacturer-input v-model="model.manufacturer_slug" />
    <b-field label="Can Contain Assets">
      <b-switch v-model="model.is_container"></b-switch>
    </b-field>
    <b-button @click="submit">Update</b-button>
  </section>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async submit() {
      try {
        await this.$axios.put(`/asset-models/${this.model.slug}/`, this.model)
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
          if (error.response) {
            this.handleError(error)
          } else {
            this.$buefy.toast.open({
              message: error.message,
              type: 'is-danger',
            })
          }
        }
      }
    },
    handleError(error) {
      if (error.response.status == 400) {
        this.$buefy.toast.open({
          message:
            'Unable to update your profile. Please check the form for errors.',
          type: 'is-danger',
        })
        this.errors = error.response.data
      } else {
        this.$buefy.toast.open({
          message: error.response.data.detail,
          type: 'is-danger',
        })
      }
    },
  },
}
</script>
