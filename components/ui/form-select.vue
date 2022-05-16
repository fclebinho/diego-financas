<template>
  <select
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    @change="onChange"
  >
    <option value="">Selecione</option>
    <option
      v-for="option in options"
      :key="option.name"
      :value="option.name"
      :selected="value === option.name"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'AppFormSelect',
    props: {
      value: {
        type: [String, Number, Object, Boolean],
        default: undefined,
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        localValue: this.value,
      };
    },
    watch: {
      value(value) {
        this.localValue = value;
      },
    },
    methods: {
      onChange($evt) {
        this.$emit('input', $evt.target.value);
      }
    },
  };
</script>
