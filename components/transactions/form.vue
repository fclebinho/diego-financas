<template>
  <div >
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
      <div>
        <form-label>Transaction date</form-label>
        <form-input v-model="form.transaction.dataVencimento" type="date" />
      </div>

      <div>
        <form-label>Amount</form-label>
        <form-input v-model="form.transaction.valorProgramado" type="number" />
      </div>

      <div>
        <form-label>Description</form-label>
        <form-input v-model="form.transaction.descricao" />
      </div>

      <div>
        <form-label>Category</form-label>
        <form-select :options="[{ name: 'Licença de softwares', id: 1 }]" />
      </div>
    </div>

    <div class="space-x-4 flex items-center justify-end">
      <a href="" class="inline-flex text-gray-700 text-sm">
        Cancel
      </a>

      <custom-button>
        Confirm
      </custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from '~/components/ui/custom-button.vue';
import FormInput from '~/components/ui/form-input.vue';
import FormLabel from '~/components/ui/form-label.vue';
import FormSelect from '~/components/ui/form-select.vue';

export default {
  name: 'FormTransaction',
  components: {
    CustomButton,
    FormInput,
    FormLabel,
    FormSelect,
  },
  props: {
    transaction: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return ({
      form: {
        transaction: { ...this.transaction }
      }
    })
  },
  methods: {
    formatDate(date, format = 'DD [de] MMM') {
      return this.$dayjs(date).format(format);
    },
  },
}
</script>
