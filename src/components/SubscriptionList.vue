<script setup lang="ts">
import type { IChannel } from '~/types/channel'
import useUserSubscriptions from '~/composables/useUserSubscriptions'
import useCurrentChannel from '~/composables/useCurrentChannel'

const isAddFeedModalOpen = ref(false)

const { data, isLoading } = useUserSubscriptions()
const { channel: currentChannel } = useCurrentChannel()

function getChannelTitle(channel: IChannel): string {
  return channel.type === 'rss'
    ? channel.rss_channel?.title || 'Unknown RSS Channel'
    : channel.atom_feed?.title || 'Unknown Atom Feed'
}
</script>

<template>
  <router-link to="/feed">
    <h1 p="l-4 t-6 b-4" text="xl orange-300">
      My Feeds
    </h1>
  </router-link>
  <li class="feed-list-item" p="y-2 x-4" text="orange-200" flex items-center cursor-pointer @click="isAddFeedModalOpen = true">
    <div inline-block class="i-carbon-add" mr-2 text-lg />
    Add New Feed
  </li>
  <section v-if="isLoading" text="center" p="t-6">
    Loading subscriptions...
  </section>
  <div v-else-if="data && data.length === 0" text="center" p="t-6 x-4">
    No subscriptions. Start following feeds by pressing the button above.
  </div>
  <ol v-else>
    <li
      v-for="subscription in data"
      :key="subscription.id"
      class="feed-list-item"
      :class="{ 'feed-list-item--active': currentChannel && currentChannel.id === subscription.channel_id }"
    >
      <router-link
        w-full
        h-full
        block
        p="y-2 x-4"
        :to="{ name: 'feed-viewer', params: { channelId: subscription.channel.id } }"
      >
        {{ subscription.channel.rss_channel.title }}
      </router-link>
    </li>
  </ol>
  <AddFeedModal v-model="isAddFeedModalOpen" />
</template>

<style scoped>
ol {
  list-style: none;
}

.feed-list-item {
  border-radius: 0px 30px 30px 0px;
  margin-right: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
}

.feed-list-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 10px;
}

.feed-list-item--active {
  border-radius: 30px 0px 0px 30px;
  margin-right: 0px !important;
  background-color: rgb(24 24 27);
  padding-left: 10px;
  margin-left: 2em;
}

.feed-list-item {
  transition: background-color .2s, border-radius .2s, margin-left .2s;
}
</style>
