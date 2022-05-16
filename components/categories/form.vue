<template>
  <div >
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
      <div>
        <form-label>Description</form-label>
        <form-input v-model="form.category.descricao" />
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

export default {
  name: 'FormCategory',
  components: {
    CustomButton,
    FormInput,
    FormLabel,
  },
  props: {
    category: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return ({
      form: {
        category: { ...this.category }
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
