<template>
  <div>
    <b-button @click="modal = true">Create Manufacturer</b-button>
    <b-modal v-model="modal" trap-focus has-modal-card>
      <div class="card">
        <manufacturer-create-form @manufacturerCreated="success" />
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
    success(slug) {
      this.modal = false
      this.$emit('manufacturerCreated', slug)
    },
  },
}
</script>
