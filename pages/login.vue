<template>
  <div class="w-80">
    <div class="flex items-center justify-center p-12">
      <a href="https://flowbite.com" class="flex flex-col space-y-4">
         <img class="block h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">finanças</span>
      </a>
    </div>
    <div class="space-y-4 pb-10">
      <div>
        <label class="form-label">Username</label>
        <input v-model="form.email" type="text" class="form-input" />
      </div>
      <div>
        <label class="form-label">Password</label>
        <input v-model="form.password" type="password" class="form-input" />
      </div>
      <button to="/" class="button-primary w-full" @click="login" >Entrar</button>
    </div>
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
    login() {
      this.$auth.loginWith('local', { data: this.form })
        .then(() => console.log("Sucesso!"))
        .catch((error) => console.error("Erro!", error));
    }
  }
}
</script>

<style>

</style>
