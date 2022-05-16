<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="font-middle text-gray-600 text-2xl">
        Categorias
      </h1>

      <custom-button @click="isCreating = !isCreating">
        New Category
      </custom-button>
    </div>

    <form-category v-if="isCreating" class="my-4 space-y-4 border-2 border-indigo-200 border-dashed bg-indigo-50 p-5 rounded-xl"/>
  </div>
</template>

<script>
import FormCategory from '~/components/categories/form.vue';
import CustomButton from '~/components/ui/custom-button.vue';

export default {
  name: 'HeaderCategories',
  components: {
    FormCategory,
    CustomButton,
  },
  data() {
    return ({
      isCreating: false,
    })
  }
}
</script>
