<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="font-middle text-gray-600 text-2xl">
        {{ $t('transactions') }}
      </h1>

      <custom-button @click="isCreating = !isCreating">
        New transaction
      </custom-button>
    </div>

    <form-transaction v-if="isCreating" class="my-4 space-y-4 border-2 border-indigo-200 border-dashed bg-indigo-50 p-5 rounded-xl"/>
  </div>
</template>

<script>
import FormTransaction from '~/components/transactions/form.vue';
import CustomButton from '~/components/ui/custom-button.vue';

export default {
  name: 'HeaderTransaction',
  components: {
    FormTransaction,
    CustomButton,
  },
  data() {
    return ({
      isCreating: false,
    })
  }
}
</script>
