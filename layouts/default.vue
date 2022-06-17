<template>
  <div>
    <NavBar />
    <div class="container column is-10">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
export default {
    name: "DefaultLayout",
    components: { NavBar }
}
</script>
