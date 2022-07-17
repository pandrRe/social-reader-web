<script setup lang="ts">
import type { AxiosError } from 'axios'
import { register } from '~/api/user'
import { mountErrors } from '~/lib/mountErrors'

function emptyFormData() {
  return {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }
}

const formData = ref(emptyFormData())
const errors = ref<string[]>([])
const isSuccess = ref<boolean>(false)

watch(formData, () => isSuccess.value = false)

function submitSignUp() {
  return register(formData.value.username, formData.value.email, formData.value.password, formData.value.passwordConfirmation)
    .then(() => {
      formData.value = emptyFormData()
      errors.value = []
      nextTick(() => {
        isSuccess.value = true
        setTimeout(() => isSuccess.value = false, 5000)
      })
    })
    .catch((err: AxiosError) => {
      errors.value = mountErrors(err)
    })
}
</script>

<template>
  <section>
    <h2 class="text-lg">
      No account? <span class="font-extrabold text-indigo-800 dark:text-blue-300">Sign up</span>.
    </h2>
    <form class="w-250px mb-4">
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
    <MessageList v-if="isSuccess" type="success" class="w-fit" :items="['Successfully created account.']" />
    <MessageList v-if="errors.length" type="error" class="w-fit" :items="errors" />
  </section>
</template>

<style scoped>

</style>
