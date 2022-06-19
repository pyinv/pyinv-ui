<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <h1 class="title is-1">Sign In</h1>
        <form @submit.prevent="userLogin">
          <div class="field">
            <label for="" class="label">Username</label>
            <div class="control">
              <input
                type="text"
                v-model="login.username"
                class="input"
                required
              />
            </div>
          </div>
          <div class="field">
            <label for="" class="label">Password</label>
            <div class="control">
              <input
                type="password"
                v-model="login.password"
                placeholder="*******"
                class="input"
                required
              />
            </div>
          </div>
          <div class="field">
            <button class="button is-success">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  auth: 'guest',
  head: {
    title: 'Log In | PyInv',
  },
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.login })
        this.$buefy.toast.open({
          message: 'Successfully logged in!',
          type: 'is-success',
        })
      } catch (err) {
        if (err.response.status == 401) {
          this.$buefy.toast.open({
            duration: 5000,
            message: err.response.data.detail,
            type: 'is-danger',
          })
        } else {
          this.$buefy.toast.open({
            duration: 5000,
            message: 'Unable to login. Please try again later.',
            type: 'is-danger',
          })
        }
      }
    },
  },
}
</script>
