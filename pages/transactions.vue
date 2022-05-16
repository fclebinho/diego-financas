<template>
  <div>
    <app-header />

    <div class="max-w-7xl mx-auto p-4">
      <div class="mt-4">
        <header-transaction />

        <list-transactions />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/app/header.vue';
import HeaderTransaction from '~/components/transactions/header.vue';
import ListTransactions from '~/components/transactions/list.vue';

export default {
  name: 'TransactionsPage',
  components: {
    AppHeader,
    HeaderTransaction,
    ListTransactions,
  },
  middleware: 'auth',
  data() {
    return {
    }
  }
}
</script>
