export const getters = {
  isAuthenticated(state) {
    return this.$auth.$state.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}
