<template>
  <div>
    <b-button @click="modal = true">{{ text }}</b-button>
    <b-modal v-model="modal" trap-focus has-modal-card>
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Extra Data</p>
        </header>
        <section class="modal-card-body">
          <pre class="has-text-left is-family-code">
            {{ asset.extra_data }}
          </pre>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Close" @click="modal = false" />
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      default: 'Show Extra Data',
    },
  },
  data() {
    return {
      modal: false,
    }
  },
}
</script>
