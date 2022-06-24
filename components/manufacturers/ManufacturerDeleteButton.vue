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
    manufacturer: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      default: 'Delete',
    },
  },
  methods: {
    confirmDelete() {
      this.$buefy.dialog.confirm({
        title: `Deleting ${this.manufacturer.name}`,
        message: `Are you sure you want to <b>delete</b> ${this.manufacturer.name}? This action cannot be undone.`,
        confirmText: 'Delete Manufacturer',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: this.performDeletion,
      })
    },
    async performDeletion() {
      try {
        await this.$axios.$delete(`manufacturers/${this.manufacturer.slug}`)
        this.$buefy.toast.open({
          message: 'Manufacturer deleted',
          type: 'is-success',
        })
        this.$router.push({ name: 'manufacturers' })
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
