<template>
  <section>
    <b-field label="Name">
      <b-input v-model="model.name"></b-input>
    </b-field>
    <b-field label="Slug">
      <b-input v-model="model.slug" disabled></b-input>
    </b-field>
    <b-field label="Manufacturer">
        <b-select placeholder="Select a manufacturer" v-model="model.manufacturer_slug" :loading="manufacturers == null">
            <option
                v-for="manufacturer in manufacturers"
                :value="manufacturer.slug"
                :key="manufacturer.slug">
                {{ manufacturer.name }}
            </option>
        </b-select>
    </b-field>
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
  data: () => ({
    manufacturers: null
  }),
  async fetch() {
    try{
      let resp = await this.$axios.get('/manufacturers/')
      this.manufacturers = resp.data.results  // TODO: Handle pagination correctly!
    } catch (error) {
      this.$buefy.toast.open({
        message: error.message,
        type: 'is-danger',
      })
    }
  },
  methods: {
    async submit() {
      try {
        await this.$axios.put(
          `/asset-models/${this.model.slug}/`,
          this.model
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
