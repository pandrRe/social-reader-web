<script setup lang="ts">
import { api } from '~/api'

api.get('sanctum/csrf-cookie').then(response => {
  console.log(response)
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
    <Footer />
  </main>
</template>
