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
      <form>
        <div class="mb-2">
          <label for="username" class="text-xs font-bold">Username</label><br>
          <input
            id="username"
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
            placeholder="Password"
            type="password"
            autocomplete="false"
            class="px-4 py-2 w-250px text-center bg-transparent border rounded border-gray-700 dark:gray-700 outline-none active:none"
          >
        </div>
        <button class="btn w-100% mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-500 dark:hover:bg-blue-700" type="submit">
          Login
        </button>
      </form>
    </section>
    <section class="px-8">
      <h2 class="text-lg">
        No account? <span class="font-extrabold text-indigo-800 dark:text-blue-300">Sign up</span>.
      </h2>
      <form>
        <div class="mb-2">
          <label for="username" class="text-xs font-bold">Username</label><br>
          <input
            id="username"
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
            placeholder="Confirm Password"
            type="password"
            autocomplete="false"
            class="px-4 py-2 w-250px text-center bg-transparent border rounded border-gray-700 dark:gray-700 outline-none active:none"
          >
        </div>
        <button class="btn w-100% mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-500 dark:hover:bg-blue-700" type="submit">
          Sign up
        </button>
      </form>
    </section>
  </section>
</template>

<style scoped>

</style>
