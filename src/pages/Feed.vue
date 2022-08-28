<script setup lang="ts">
const isAddFeedModalOpen = ref(false)
const selectedFeed = ref<Record<string, unknown> | null>(null)

function selectFeed(feed: Record<string, unknown>) {
  selectedFeed.value = feed
}
</script>

<template>
  <AppBar />
  <section flex="~ auto">
    <section flex="~ auto col" w="20%" border="r-1 slate-600">
      <div flex="~" justify-center items-baseline>
        <button
          class="btn w-100% mt-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-blue-500 dark:hover:bg-blue-700"
          w="50%"
          type="submit"
          @click="isAddFeedModalOpen = true"
        >
          Add New Feed
        </button>
      </div>
      <SubscriptionList @selectFeed="selectFeed"></SubscriptionList>
    </section>
    <section flex="auto" w="80%">
      <router-view></router-view>
    </section>
    <AddFeedModal v-model="isAddFeedModalOpen" />
  </section>
</template>

<style scoped>

</style>
