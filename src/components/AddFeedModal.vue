<script setup lang="ts">
import { useMutation, useQueryClient } from 'vue-query'
import { addUserSubscription } from '~/api/channel'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])
const feedUrl = ref('')

const queryClient = useQueryClient()

const { mutate } = useMutation((url: string) => {
  return addUserSubscription(url).then((subscription) => {
    queryClient.invalidateQueries(['userSubscriptions'])
    emit('update:modelValue', false)
    return subscription
  })
})

function subscribe() {
  if (feedUrl.value) {
    mutate(feedUrl.value)
  }
}

function closeModal() {
  emit('update:modelValue', false)
}
</script>

<template>
  <Modal :model-value="modelValue" @update:modelValue="value => emit('update:modelValue', value)">
    <template #header>
      Insert the URL to a RSS/Atom feed.
    </template>
    <template #body>
      <div p="y-4">
        <input
          id="new-feed-url"
          v-model="feedUrl"
          placeholder="URL"
          type="text"
          autocomplete="false"
          class="w-100% px-4 py-2 text-center bg-transparent border rounded border-gray-700 dark:gray-700 outline-none active:none"
        >
      </div>
    </template>
    <template #footer>
      <div flex justify-end>
        <button btn mr-2 bg="transparent hover:gray-800" @click="closeModal">
          Cancel
        </button>
        <button btn class="bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-500 dark:hover:bg-blue-700" @click="subscribe">
          Add Feed
        </button>
      </div>
    </template>
  </Modal>
</template>

<style scoped>

</style>
