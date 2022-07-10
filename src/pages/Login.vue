<script setup lang="ts">

</script>

<template>
  <section class="mb-6">
    <h1 class="text-3xl">
      Welcome to <span class="font-extrabold text-indigo-800 dark:text-blue-300">Social Reader</span>.
    </h1>
  </section>
  <section class="flex justify-center divide-x divide-gray-500 text-left">
    <section class="px-8">
      <h2 class="text-lg">
        Returning user? <span class="font-extrabold text-indigo-800 dark:text-blue-300">Login</span>.
      </h2>
      <LoginForm></LoginForm>
    </section>
    <section class="px-8">
      <h2 class="text-lg">
        No account? <span class="font-extrabold text-indigo-800 dark:text-blue-300">Sign up</span>.
      </h2>
      <SignInForm></SignInForm>
    </section>
  </section>
</template>

<style scoped>

</style>
