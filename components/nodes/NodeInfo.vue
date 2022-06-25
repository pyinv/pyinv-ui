<template>
  <div class="box">
    <h4 class="title is-4">Node Information</h4>
    <div class="columns has-text-centered">
      <div class="column">
        <h5 class="title is-5">Location</h5>
        <p v-if="node.ancestors && node.ancestors[0]">
          <node-link-text :node="node.ancestors[0]" />
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
import NodeLinkText from './NodeLinkText.vue'
import NodeType from './NodeType.vue'
export default {
  components: { NodeLinkText, NodeType },
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
}
</script>
