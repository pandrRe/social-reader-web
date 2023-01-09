<script setup lang="ts">
import type { IChannel } from '~/types/channel'
import useUserSubscriptions from '~/composables/useUserSubscriptions'
import useCurrentChannel from '~/composables/useCurrentChannel'
import htmlDecode from '~/lib/htmlDecode'

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
  <div font-body>
    <router-link to="/feed">
      <h1 font-sans p="l-4 t-6 b-4" text="xl orange-300">
        My Feeds
      </h1>
    </router-link>
    <li class="feed-list-item" p="y-2 x-4" text="orange-200" flex items-center cursor-pointer @click="isAddFeedModalOpen = true">
      <div inline-block class="i-carbon-add" mr-2 text-lg />
      Add New Feed
    </li>
    <li class="feed-list-item" p="y-2 x-4" text="orange-200" flex items-center cursor-pointer @click="isAddFeedModalOpen = true">
      <div inline-block class="i-carbon-folder-add" mr-2 text-lg />
      Create New Folder
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
          {{ htmlDecode(subscription.channel.rss_channel.title) }}
        </router-link>
      </li>
    </ol>
    <AddFeedModal v-model="isAddFeedModalOpen" />
  </div>
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
  background-color: rgba(55, 65, 81, 1);
  margin-right: 10px;
}

.feed-list-item--active {
  border-radius: 30px 0px 0px 30px;
  margin-right: 0px !important;
  border: 1px solid rgb(55 65 81);
  border-right: 0;
  padding-left: 10px;
  margin-left: 2em;
  position: relative;
}

.feed-list-item {
  transition: background-color .2s, border-radius .2s, margin-left .2s;
}
</style>
