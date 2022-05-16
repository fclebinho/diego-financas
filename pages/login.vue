<template>
  <div class="bg-gray-200 fixed inset-0 flex content-center">
    <div class="bg-white m-auto p-10 space-y-6 border rounded-xl shadow-md">
      <div class="flex items-center justify-center w-64 p-8">
        <a href="https://flowbite.com" class="flex flex-col space-y-4">
          <img class="block h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <span class="self-center text-2xl whitespace-nowrap text-gray-600 dark:text-white">finanças one</span>
        </a>
      </div>
      <form class="space-y-4 pb-10" @submit.prevent="userLogin">
        <fieldset>
          <form-label>Username</form-label>
          <form-input v-model="form.email" type="text" placeholder="Type your e-mail..." />
        </fieldset>
        <fieldset>
          <form-label>Password</form-label>
          <form-input v-model="form.password" type="password" placeholder="Type your password..."/>
        </fieldset>
        <custom-button type="submit" class="button-primary w-full" :disabled="isLoading" >
          <svg v-if="isLoading" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>
          <div v-else>
            Login
          </div>
        </custom-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CustomButton from '~/components/ui/custom-button.vue';
import FormInput from '~/components/ui/form-input.vue';
import FormLabel from '~/components/ui/form-label.vue';

export default {
  name: 'LoginPage',
  auth: false,
  components: {
    CustomButton,
    FormInput,
    FormLabel
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.app.auth.loading
    })
  },
  methods: {
    userLogin({ redirect }) {
      this.$store.dispatch('app/setLoginLoading');
      this.$auth.loginWith('local', { data: this.form })
        .then((response) => {
          this.$router.push('transactions');
          console.log(response);
        })
        .catch((error) => console.log(error))
        .finally(() => this.$store.dispatch('app/setLoginLoading'));
    }
  }
}
</script>

<style>

</style>
