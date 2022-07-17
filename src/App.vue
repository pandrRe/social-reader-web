<script setup lang="ts">
import { api } from '~/api'

const isLoading = ref(true)
const hasMadeCsrfRequest = ref(false)
const errorOnCsrfRequest = ref(false)

api.get('sanctum/csrf-cookie')
  .catch(() => {
    errorOnCsrfRequest.value = true
  })
  .finally(() => {
    isLoading.value = false
    hasMadeCsrfRequest.value = true
  })
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <section v-if="isLoading" class="flex justify-center items-center h-50vh">
      <LoadingSpinner />
    </section>
    <section v-else-if="errorOnCsrfRequest" class="flex justify-center items-center h-50vh">
      Error while securing the page. Please reload.
    </section>
    <router-view v-else />
    <!--    <Footer /> -->
  </main>
</template>
