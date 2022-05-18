<template>
  <div>
    <div class="mt-6 pb-6 flex items-center space-x-4 border-b border-gray-300">
      <div>
        <form-label>{{ $t('global.description') }}</form-label>
        <form-input />
      </div>

      <div>
        <form-label>{{ $t('global.category') }}</form-label>
        <form-select :options="[{ name: 'Licença de softwares', id: 1 }]" />
      </div>
    </div>

    <div class="mt-4">
      <div class="space-y-8">
        <div v-for="(group, index) in transactionsGrouped" :key="index">
          <div class="mb-1">
            <div class="font-bold text-sm">
              {{ formatDate(index) }}
            </div>
          </div>

          <div class="space-y-3">
            <div v-for="transaction in group" :key="transaction.id" >
              <list-item-transaction :transaction="transaction" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { groupBy, orderBy } from 'lodash';
import { mapState } from 'vuex';
import FormSelect from '~/components/ui/form-select.vue';
import FormLabel from '~/components/ui/form-label.vue';
import FormInput from '~/components/ui/form-input.vue';
import ListItemTransaction from '~/components/transactions/list-item.vue';

export default {
  name: 'ListTransactions',
  components: {
    FormSelect,
    FormLabel,
    FormInput,
    ListItemTransaction,
  },
  computed: {
    ...mapState({
      transactions: store => store.transactions.entries,
    }),
    transactionsGrouped() {
      return groupBy(orderBy(this.transactions, 'dataVencimento', 'desc'), 'dataVencimento');
    }
  },
  mounted() {
    this.$store.dispatch('transactions/fetchAll', {"TiposFinanceiros": 3});
  },
  methods: {
    formatDate(date, format = 'DD [de] MMM') {
      return this.$dayjs(date).format(format);
    },
  }
}
</script>
