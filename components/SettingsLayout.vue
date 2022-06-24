<template>
  <div class="container column is-10">
    <div class="columns">
      <div class="column is-one-quarter">
        <settings-menu />
      </div>
      <div class="column">
        <section class="section">
          <h1 class="title is-2"><slot name="pre-title" />{{ title }}</h1>
          <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
          <slot />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
}
</script>
