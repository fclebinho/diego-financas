<template>
  <div
    class="container d-flex align-items-center justify-content-center flex-column"
  >
    <img src="~/static/loading.svg" alt="Loading..." width="80px" />
    Logging in...
  </div>
</template>

<script>
export default {
  name: 'CallbackPage',
  auth: false,
}
</script>

<style scoped>
.container {
  min-height: 70vh;
}
</style>
