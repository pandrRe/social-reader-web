<script setup lang="ts">
import { useQuery } from 'vue-query'
import { getUserSubscriptions } from '~/api/channel'

const emit = defineEmits(['selectFeed'])

const { data, isLoading } = useQuery(['userSubscriptions'], getUserSubscriptions)
</script>

<template>
  <h1 p="l-4 t-6" text="lg orange-300">My Feeds</h1>
  <section v-if="isLoading" text="center" p="t-6">
    Loading subscriptions...
  </section>
  <div v-else-if="data && data.length === 0" text="center" p="t-6 x-4">
    No subscriptions. Start following feeds by pressing the button above.
  </div>
  <ol v-else>
    <li v-for="feed in data" :key="feed.id" p="4">
      <router-link :to="{ name: 'feed-viewer', params: { feedId: feed.id } }">
        {{ feed.channel.rss_channel.title }}
      </router-link>
    </li>
  </ol>
</template>

<style scoped>
ol {
  list-style: none;
}
</style>
