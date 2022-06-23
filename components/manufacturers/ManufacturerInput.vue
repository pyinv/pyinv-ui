<template>
  <b-field label="Manufacturer" :message="message" :type="type">
    <b-select
      placeholder="Select a manufacturer"
      @input="handleInput"
      :value="value"
      :loading="manufacturers == null"
    >
      <option
        v-for="manufacturer in manufacturers"
        :value="manufacturer.slug"
        :key="manufacturer.slug"
      >
        {{ manufacturer.name }}
      </option>
    </b-select>
    <manufacturer-create-modal
      v-if="showCreateButton"
      @manufacturerCreated="manufacturerCreated"
      text="+"
    />
  </b-field>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    showCreateButton: {
      type: Boolean,
      default: true,
    },
    message: {
      type: String,
      default: null,
    },
    type: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      slug: this.value,
      manufacturers: null,
    }
  },
  async fetch() {
    try {
      let resp = await this.$axios.get('/manufacturers/?ordering=name')
      this.manufacturers = resp.data.results // TODO: Handle pagination correctly!
    } catch (error) {
      this.$buefy.toast.open({
        message: error.message,
        type: 'is-danger',
      })
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e)
    },
    manufacturerCreated(slug) {
      this.$fetch()
      this.handleInput(slug)
    },
  },
}
</script>
