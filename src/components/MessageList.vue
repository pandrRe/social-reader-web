<script setup lang="ts">
const props = defineProps<{
  items: string[]
  type: 'success' | 'error'
  title?: string
}>()

const { type } = toRefs(props)

const classNames = computed(() => {
  if (type.value === 'success')
    return 'bg-green-100 border-green-500 text-green-700'
  else
    return 'bg-orange-100 border-orange-500 text-orange-700'
})
</script>

<template>
  <div class="border-l-4 p-4" :class="classNames" role="alert">
    <p v-if="title" class="font-bold">
      {{ title }}
    </p>
    <p v-for="item in items" :key="item">
      {{ item }}
    </p>
  </div>
</template>

<style scoped>

</style>
