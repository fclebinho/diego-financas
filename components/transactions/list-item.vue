<template>
  <div class="px-5 py-6 bg-white rounded-lg shadow">
    <div class="flex items-center">
      <div class="flex items-center space-x-5">
        <div>
          <div>
            <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Software
            </div>
          </div>

          <div class="mt-1.5">
            {{ transaction.descricao }}
          </div>
        </div>
      </div>

      <div class="flex items-center space-x-4 ml-auto">
        <div class="flex items-center">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>

          <div class="font-bold">
            {{ new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL', signDisplay: 'never' }).format(transaction.valorProgramado) }}
          </div>
        </div>

        <button @click="isEditing = !isEditing">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>
    </div>

    <div v-if="isEditing">
      <form-transaction class="my-4 mt-10 space-y-4" :transaction="transaction" />
    </div>
  </div>
</template>

<script>
import FormTransaction from '~/components/transactions/form.vue';

export default {
  name: 'ListItemTransaction',
  components: {
    FormTransaction,
  },
  props: {
    transaction: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return ({
      isEditing: false,
    })
  },
}
</script>
