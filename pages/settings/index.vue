<script>
export default {
  middleware({ redirect }) {
    return redirect('302', '/settings/profile/')
  },
}
</script>
