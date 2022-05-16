<template>
  <div class="w-80">
    <div class="flex items-center justify-center p-12">
      <a href="https://flowbite.com" class="flex flex-col space-y-4">
         <img class="block h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">finanças</span>
      </a>
    </div>
    <form class="space-y-4 pb-10" @submit.prevent="userLogin">
      <fieldset>
        <label class="form-label">Username</label>
        <input v-model="form.email" type="text" class="form-input" />
      </fieldset>
      <fieldset>
        <label class="form-label">Password</label>
        <input v-model="form.password" type="password" class="form-input" />
      </fieldset>
      <button type="submit" class="button-primary w-full" >Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'centralized',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.form })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>
