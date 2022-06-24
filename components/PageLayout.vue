<template>
  <div>
    <section class="section">
      <slot name="breadcrumbs">
        <b-breadcrumb>
          <b-breadcrumb-item active>{{ title }}</b-breadcrumb-item>
        </b-breadcrumb>
      </slot>
      <div class="columns">
        <div class="column is-three-quarters">
          <h1 class="title is-1"><slot name="pre-title" />{{ title }}</h1>
        </div>
        <div class="column"><slot name="buttons" /></div>
      </div>
    </section>
    <section class="section content">
      <slot name="content" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 0;
}
</style>
