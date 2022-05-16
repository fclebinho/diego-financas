<template>
  <div class="bg-gray-200 fixed inset-0 flex content-center">
    <nuxt class="bg-white m-auto p-10 space-y-6 border rounded-xl shadow-md" />
  </div>
</template>

<script>
export default {
  name: 'CentralizedLayout',
}
</script>

<style>
  .button-primary {
    @apply inline-flex items-center justify-center border focus:outline-none transition ease-in-out duration-150 text-white bg-indigo-600 hover:bg-indigo-800 border-indigo-600 hover:border-indigo-800 rounded text-sm px-4 py-2
  }

  .form-label {
    @apply block mb-1 text-sm text-gray-500
  }

  .form-input {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
  }
</style>
