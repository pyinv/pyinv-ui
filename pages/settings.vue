<template>
  <section class="section">
    <h1 class="title is-1">Settings</h1>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  head: {
    title: 'Settings | PyInv',
  },
}
</script>
