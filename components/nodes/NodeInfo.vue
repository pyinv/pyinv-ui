<template>
  <asset-info v-if="node.asset" :asset="node.asset" />
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
