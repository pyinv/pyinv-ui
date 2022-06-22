<template>
  <div>
    <NavBar />
    <div class="container column is-10">
      <div class="columns">
        <div class="column is-one-quarter">
          <settings-menu />
        </div>
        <div class="column"><Nuxt /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsLayout',
}
</script>
