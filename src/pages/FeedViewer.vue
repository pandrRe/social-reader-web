<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  feedId: {
    type: Number as PropType<number>,
    required: true,
  },
})
</script>

<template>
  <ol v-if="selectedFeed">
    <li v-for="item in selectedFeed.items" :key="item.id">
      {{ item.title }}
    </li>
  </ol>
</template>

<style scoped>

</style>
