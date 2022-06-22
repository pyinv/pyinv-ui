<template>
  <b-menu>
    <b-menu-list label="Settings">
      <b-menu-item icon="account" label="My Profile" :active="isActive" />
      <b-menu-item icon="account-multiple" label="Users" disabled />
      <b-menu-item icon="printer" label="Printers" disabled />
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    }
  },
}
</script>
