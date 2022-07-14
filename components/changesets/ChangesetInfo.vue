<template>
  <div class="box">
    <h4 class="title is-4">Changeset Information</h4>
    <div class="columns has-text-centered">
      <div class="column">
        <h5 class="title is-5">User</h5>
        <p>{{ changeset.user.display_name }}</p>
      </div>
      <div class="column">
        <h5 class="title is-5">Timestamp</h5>
        <p>{{ changeset.timestamp }}</p>
      </div>
    </div>
    <pre>{{ changeset.comment }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    changeset: {
      type: Object,
      required: true,
    },
  },
}
</script>
