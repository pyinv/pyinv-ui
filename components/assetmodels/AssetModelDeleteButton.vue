<template>
  <b-button
    :disabled="$auth.loggedIn == false"
    type="is-danger"
    @click="confirmDelete"
  >
    {{ text }}
  </b-button>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      default: 'Delete Asset Model',
    },
  },
  methods: {
    confirmDelete() {
      this.$buefy.dialog.confirm({
        title: `Deleting ${this.model.name}`,
        message: `Are you sure you want to <b>delete</b> ${this.model.name}? This action cannot be undone.`,
        confirmText: 'Delete Asset Model',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: this.performDeletion,
      })
    },
    async performDeletion() {
      try {
        await this.$axios.$delete(`asset-models/${this.model.slug}`)
        this.$buefy.toast.open({
          message: 'Asset Model deleted',
          type: 'is-success',
        })
        this.$router.push({ name: 'models' })
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
