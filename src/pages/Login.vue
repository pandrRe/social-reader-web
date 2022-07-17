<script setup lang="ts">

</script>

<template>
  <section class="mb-6">
    <h1 class="text-3xl">
      Welcome to <span class="font-extrabold text-indigo-800 dark:text-blue-300">Social Reader</span>.
    </h1>
  </section>
  <section class="flex flex-column justify-center divide-x divide-gray-500 text-left">
    <section class="flex-[0_0_50%] px-8 flex justify-end">
      <LoginForm />
    </section>
    <section class="flex-[0_0_50%] px-8">
      <SignInForm />
    </section>
  </section>
</template>

<style scoped>

</style>
