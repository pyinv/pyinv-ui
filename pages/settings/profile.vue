<template>
  <section class="section">
    <h1 class="title is-2">My Profile</h1>
    <p class="subtitle">View and update your profile information.</p>
    <b-field
      label="Username"
      :type="{ 'is-danger': errors.username }"
      :message="errors.username"
    >
      <b-input v-model="profile.username"></b-input>
    </b-field>
    <b-field label="First Name">
      <b-input v-model="profile.first_name"></b-input>
    </b-field>
    <b-field label="Last Name">
      <b-input v-model="profile.last_name"></b-input>
    </b-field>
    <b-button @click="submit" type="is-primary">Update Profile</b-button>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  layout: 'settings',
  head: {
    title: 'My Profile | PyInv',
  },
  data() {
    return {
      errors: {},
    }
  },
  async asyncData({ $axios }) {
    let profile = await $axios.$get('accounts/profile/')
    return { profile }
  },
  methods: {
    async submit() {
      try {
        await this.$axios.patch(`accounts/profile/`, this.profile)
        await this.$auth.fetchUser()
        this.$buefy.toast.open({
          message: 'Updated successfully.',
          type: 'is-success',
        })
      } catch (error) {
        if (error.response) {
          this.handleError(error)
        } else {
          this.$buefy.toast.open({
            message: error.message,
            type: 'is-danger',
          })
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
