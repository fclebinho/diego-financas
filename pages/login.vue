<template>
  <div class="w-80">
    <div class="flex items-center justify-center p-8">
      <a href="https://flowbite.com" class="flex flex-col space-y-4">
         <img class="block h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
         <span class="self-center text-2xl whitespace-nowrap text-gray-600 dark:text-white">finanças</span>
      </a>
    </div>
    <form class="space-y-4 pb-10" @submit.prevent="userLogin">
      <fieldset>
        <label class="form-label">Username</label>
        <input v-model="form.email" type="text" class="form-input" placeholder="Type your e-mail..." />
      </fieldset>
      <fieldset>
        <label class="form-label">Password</label>
        <input v-model="form.password" type="password" class="form-input" placeholder="Type your password..."/>
      </fieldset>
      <button type="submit" class="button-primary w-full" >Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'centralized',
  auth: false,
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
     userLogin({ redirect }) {
      this.$auth.loginWith('local', { data: this.form })
        .then((response) => {
          this.$router.push('dashboard');
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>
