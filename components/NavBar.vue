<template>
  <b-navbar type="is-primary">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong>PyInv</strong>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Assets
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'models' }">
        Asset Models
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'manufacturers' }">
        Manufacturers
      </b-navbar-item>
      <b-navbar-dropdown label="Other">
        <b-navbar-item tag="router-link" :to="{ name: 'assets-unknown' }">
          Unknown Assets
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <input class="input" type="search" placeholder="Search..." />
      </b-navbar-item>
      <b-navbar-dropdown
        v-if="$auth.loggedIn"
        :label="$auth.user.first_name || $auth.user.username"
        right
      >
        <b-navbar-item tag="router-link" :to="{ name: 'settings' }">
          Settings
        </b-navbar-item>
        <b-navbar-item @click="logout"> Logout </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item v-else tag="router-link" :to="{ name: 'login' }">
        Login
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
      this.$buefy.toast.open({
        message: 'Successfully logged out!',
        type: 'is-success',
      })
    },
  },
}
</script>
