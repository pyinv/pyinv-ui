<template>
  <div class="box">
    <h4 class="title is-4">Node Information</h4>
    <div class="columns has-text-centered">
      <div class="column">
        <h5 class="title is-5">Location</h5>
        <p v-if="node.ancestors && node.ancestors.length > 0">
          <node-link
            :node="node.ancestors[node.ancestors.length - 1]"
            :button="false"
          />
        </p>
        <p v-else>N/A</p>
      </div>
      <div class="column">
        <h5 class="title is-5">Type</h5>
        <p><node-type :node="node" /></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
}
</script>
