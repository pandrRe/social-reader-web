<script setup lang="ts">
import {register} from "~/api/user";

const formData = reactive({
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
})

function submitSignUp() {
  register(formData.username, formData.email, formData.password, formData.passwordConfirmation)
}
</script>

<template>
  <form>
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
    <div class="mb-2">
      <label for="email" class="text-xs font-bold">Email</label><br>
      <input
        id="email"
        v-model="formData.email"
        placeholder="Email"
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
    <div>
      <label for="password-confirmation" class="text-xs font-bold">Confirm Password</label><br>
      <input
        id="password-confirmation"
        v-model="formData.passwordConfirmation"
        placeholder="Confirm Password"
        type="password"
        autocomplete="false"
        class="px-4 py-2 w-250px text-center bg-transparent border rounded border-gray-700 dark:gray-700 outline-none active:none"
      >
    </div>
    <button
      class="btn w-100% mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-500 dark:hover:bg-blue-700"
      type="submit"
      @click.prevent="submitSignUp"
    >
      Sign up
    </button>
  </form>
</template>

<style scoped>

</style>
