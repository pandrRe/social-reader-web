<script setup lang="ts">
import type { PropType } from 'vue'
import type { TItem } from '~/types/channel'

const props = defineProps({
  modelValue: { type: Object as PropType<TItem | null> },
})
const emit = defineEmits(['update:modelValue'])
function closeModal() {
  emit('update:modelValue', null)
}
</script>

<template>
  <Modal :model-value="!!modelValue" @update:modelValue="value => !value && closeModal()">
    <template #header>
      <h2 v-if="modelValue" text-xl inline-block font-semibold pb-4>
        {{ modelValue.title }}
      </h2>
    </template>
    <template #body>
      <article class="item-content" v-if="modelValue" p="y-4 x-2" v-html="modelValue.content" />
    </template>
    <template #footer>
      <div flex justify-end>
        <button btn mr-2 bg="transparent hover:neutral-800" @click="closeModal">
          Close
        </button>
      </div>
    </template>
  </Modal>
</template>

<style>
.item-content p {
  margin-bottom: 1em;
}

.item-content img {
  margin: 0 auto;
  object-fit: scale-down;
  max-height: 40vh;
}
</style>
