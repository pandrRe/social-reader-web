<script setup lang="ts">
import { login } from '~/api/user'

const formData = reactive({
  username: '',
  password: '',
})

function submitLogin() {
  login(formData.username, formData.password)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
</script>

<template>
  <section>
    <h2 class="text-lg">
      Returning user? <span class="font-extrabold text-indigo-800 dark:text-blue-300">Login</span>.
    </h2>
    <form class="w-250px">
      <div class="mb-2">
        <label for="username" class="text-xs font-bold">Username</label><br>
        <input
          id="username"
          v-model="formData.username"
          placeholder="Username"
          type="text"
          autocomplete="false"
          class="px-4 py-2 w-250px text-center bg-transparent border rounded border-gray-700 dark:gray-700 outline-none active:none"
        >
      </div>
      <div>
        <label for="password" class="text-xs font-bold">Password</label><br>
        <input
          id="password"
          v-model="formData.password"
          placeholder="Password"
          type="password"
          autocomplete="false"
          class="px-4 py-2 w-250px text-center bg-transparent border rounded border-gray-700 dark:gray-700 outline-none active:none"
        >
      </div>
      <button
        class="btn w-100% mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-500 dark:hover:bg-blue-700"
        type="submit"
        @click.prevent="submitLogin"
      >
        Login
      </button>
    </form>
  </section>
</template>

<style scoped>

</style>
